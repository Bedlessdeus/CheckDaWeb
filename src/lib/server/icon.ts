/*

Documentation: https://www.libpng.org/pub/png/spec/1.2/PNG-Chunks.html

*/
import { deflateSync } from 'zlib';

export const writeUInt16LE = (buffer: Uint8Array, offset: number, value: number): void => {
	buffer[offset] = value & 0xff;
	buffer[offset + 1] = (value >> 8) & 0xff;
};

export const writeUInt32LE = (buffer: Uint8Array, offset: number, value: number): void => {
	buffer[offset] = value & 0xff;
	buffer[offset + 1] = (value >> 8) & 0xff;
	buffer[offset + 2] = (value >> 16) & 0xff;
	buffer[offset + 3] = (value >> 24) & 0xff;
};

export const creatChunk = (type: string, data: Uint8Array): Uint8Array => {
	const chunk = new Uint8Array(8 + data.length + 4);
	chunk[0] = (data.length >>> 24) & 0xff;
	chunk[1] = (data.length >>> 16) & 0xff;
	chunk[2] = (data.length >>> 8) & 0xff;
	chunk[3] = data.length & 0xff;

	for (let i = 0; i < 4; i++) {
		chunk[4 + i] = type.charCodeAt(i);
	}

	chunk.set(data, 8);

	const crcInput = chunk.subarray(4, 8 + chunk.length);
	const crc = CRC32.compute(crcInput);

	chunk[8 + data.length] = crc & 0xff;
	chunk[9 + data.length] = (crc >> 8) & 0xff;
	chunk[10 + data.length] = (crc >> 16) & 0xff;
	chunk[11 + data.length] = (crc >> 24) & 0xff;

	return chunk;
};

export const buildIHDR = (width: number, height: number): Uint8Array => {
	const buf = new Uint8Array(13);

	buf[0] = (width >>> 24) & 0xff;
	buf[1] = (width >>> 16) & 0xff;
	buf[2] = (width >>> 8) & 0xff;
	buf[3] = width & 0xff;

	buf[4] = (height >>> 24) & 0xff;
	buf[5] = (height >>> 16) & 0xff;
	buf[6] = (height >>> 8) & 0xff;
	buf[7] = height & 0xff;

	// Bit Depth
	buf[8] = 0x08;

	// RGBA
	buf[9] = 0x06;

	// Deflate
	buf[10] = 0x00;

	// Adaptive filtering
	buf[11] = 0x00;

	// No interlace
	buf[12] = 0x00;

	return buf;
};

export const buildIDAT = (pixels: Uint8Array, width: number, height: number): Uint8Array => {
	const stride = width * 4;
	const rawData = new Uint8Array(height * (stride + 1));

	for (let y = 0; y < height; y++) {
		rawData[y * (stride + 1)] = 0;
		rawData.set(pixels.subarray(y * stride, (y + 1) * stride), y * (stride + 1) + 1);
	}

	return deflateSync(rawData);
};

export const concatArrays = (arrays: Uint8Array[]): Uint8Array => {
	const length = arrays.reduce((acc, arr) => acc + arr.length, 0);
	const result = new Uint8Array(length);
	let offset = 0;
	for (const arr of arrays) {
		result.set(arr, offset);
		offset += arr.length;
	}
	return result;
};

export const buildPNG = (pixels: Uint8Array, width: number, height: number): Uint8Array => {
	const signature = new Uint8Array([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
	const ihdr = creatChunk('IHDR', buildIHDR(width, height));
	const idat = creatChunk('IDAT', buildIDAT(pixels, width, height));
	const iend = creatChunk('IEND', new Uint8Array(0));
	return concatArrays([signature, ihdr, idat, iend]);
};

export const writeUInt16Leico = (buffer: Uint8Array, offset: number, value: number): void => {
	buffer[offset] = value & 0xff;
	buffer[offset + 1] = (value >> 8) & 0xff;
};

export const writeUInt32Leico = (buffer: Uint8Array, offset: number, value: number): void => {
	buffer[offset] = value & 0xff;
	buffer[offset + 1] = (value >> 8) & 0xff;
	buffer[offset + 2] = (value >> 16) & 0xff;
	buffer[offset + 3] = (value >> 24) & 0xff;
};

export const buildICO = (png: Uint8Array, width: number, height: number): Uint8Array => {
	const header = new Uint8Array(6);
	// Reserved
	writeUInt16Leico(header, 0, 0);
	// ICO
	writeUInt16Leico(header, 2, 1);
	// Count
	writeUInt16Leico(header, 4, 1);

	const entry = new Uint8Array(16);
	entry[0] = width === 256 ? 0 : width;
	entry[1] = height === 256 ? 0 : height;
	// Color count
	entry[2] = 0;
	// Reserved
	entry[3] = 0;
	// Planes
	writeUInt16Leico(entry, 4, 1);
	// Bit count
	writeUInt16Leico(entry, 6, 32);
	// Byte size
	writeUInt32Leico(entry, 8, png.length);
	// Offset
	writeUInt32Leico(entry, 12, header.length + entry.length);

	return concatArrays([header, entry, png]);
};

class CRC32 {
	private static table = (() => {
		const table = new Uint32Array(256);
		for (let i = 0; i < 256; i++) {
			let c = i;
			for (let j = 0; j < 8; j++) {
				if (c & 1) {
					c = 0xedb88320 ^ (c >>> 1);
				} else {
					c = c >>> 1;
				}
			}
			table[i] = c >>> 0;
		}
		return table;
	})();

	static compute(buffer: Uint8Array): number {
		let crc = 0xffffffff;
		for (const b of buffer) {
			crc = CRC32.table[(crc ^ b) & 0xff] ^ (crc >>> 8);
		}
		return (crc ^ 0xffffffff) >>> 0;
	}
}

export const buildFaviconICO = (w: number, h: number, bg: RGBA) => {
	const pixels = new Uint8Array(w * h * 4);

	for (let i = 0; i < pixels.length; i += 4) {
		// Red
		pixels[i] = bg.r;
		// Green
		pixels[i + 1] = bg.g;
		// Blue
		pixels[i + 2] = bg.b;
		// Alpha
		pixels[i + 3] = bg.a;
	}

	const lW = 20;
	const lH = 20;
	const startX = Math.floor((w - lW) / 2);
	const startY = Math.floor((h - lH) / 2);

	for (let y = 0; y < lH; y++) {
		for (let x = 0; x < lW; x++) {
			if (y < lH / 2) {
				if (x >= lW / 2 - y && x <= lW / 2 + y) {
					const idx = (startY + y * w + startX + x) * 4;
					pixels[idx] = 255;
					pixels[idx + 1] = 255;
					pixels[idx + 2] = 255;
					pixels[idx + 3] = 255;
				}
			} else {
				if (
					y === Math.floor(lH / 2) ||
					x === Math.floor(lW / 4) ||
					x === Math.floor((3 * lW) / 4)
				) {
					const idx = (startY + y * w + startX + x) * 4;
					pixels[idx] = 255;
					pixels[idx + 1] = 255;
					pixels[idx + 2] = 255;
					pixels[idx + 3] = 255;
				}
			}
		}
	}
    const ico = buildICO(buildPNG(pixels, w, h), w, h);
    return ico;
};

export type RGBA = {
	r: number;
	g: number;
	b: number;
	a: number;
};
