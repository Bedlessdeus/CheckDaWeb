# CheckDaWeb

 An all-in-one Open Source Intelligence (OSINT) tool designed for comprehensive website analysis. Inspired by the excellent [Lissy93/web-check](https://github.com/lissy93/web-check) project, CheckDaWeb aims to provide a deep dive into various aspects of any given website.

## ✨ Features

CheckDaWeb provides insightful data across a wide range of categories, offering a holistic view of a website's infrastructure, security, and content. The tool currently provides insights into the following:

  * **IP Information:** Details about the server's IP address.
  * **SSL Chain:** Information about the SSL/TLS certificate chain.
  * **DNS Records:** A comprehensive look at the domain's DNS records (A, AAAA, MX, NS, etc.).
  * **Cookies:** Analysis of cookies set by the website.
  * **Crawl Rules:** Information derived from `robots.txt` and other crawl directives.
  * **Headers:** HTTP response headers analysis.
  * **Quality Metrics:** Various metrics assessing website quality.
  * **Server Location:** Geographical location of the server.
  * **Associated Hosts:** Other domains/subdomains linked to the main host.
  * **Redirect Chain:** The sequence of redirects a URL might follow.
  * **TXT Records:** Custom text records from DNS.
  * **Server Status:** Current operational status of the web server.
  * **Open Ports:** Identification of open ports on the server.
  * **Traceroute:** Network path to the server.
  * **Carbon Footprint:** Estimated environmental impact of the website.
  * **Server Information:** Detailed information about the web server.
  * **Whois Lookup:** Domain registration details.
  * **Domain Information:** General information about the domain.
  * **DNS Security Extensions (DNSSEC):** Status of DNSSEC.
  * **Site Features:** Various identified features of the website.
  * **HTTP Strict Transport Security (HSTS):** HSTS policy details.
  * **DNS Server:** Information about the authoritative DNS servers.
  * **Tech Stack:** Identification of technologies used (e.g., frameworks, libraries, CMS).
  * **Listed Pages:** Discovered pages on the website.
  * **Security.txt:** Content of the `security.txt` file, if present.
  * **Linked Pages:** Pages linked from the current page.
  * **Social Tags:** Open Graph, Twitter Card, and other social media meta tags.
  * **Email Configuration:** Email-related DNS records (SPF, DMARC, DKIM).
  * **Firewall Detection:** Attempts to identify web application firewalls (WAFs).
  * **HTTP Security Features:** Analysis of various HTTP security headers.
  * **Archive History:** Historical snapshots from web archives.
  * **Global Ranking:** Website's ranking on popular platforms.
  * **Block Detection:** Checks for potential blocking by various services.
  * **Malware & Phishing Detection:** Scans for known malware or phishing indicators.
  * **TLS Cipher Suites:** Supported TLS cipher suites.
  * **TLS Security Configuration:** Overall TLS security assessment.
  * **TLS Handshake Simulation:** Simulation of the TLS handshake process.
  * **Screenshot:** A visual capture of the website.

## 🚀 Getting Started

CheckDaWeb is designed to be easy to set up and use. The primary recommended method for deployment is via Docker.

### Installation via Docker

A dedicated Docker page will be provided soon with detailed instructions for pulling and running the Docker image. Please check back here for the link to the Docker image and its setup guide.

Once the Docker image is running, you can access the CheckDaWeb web interface through your browser.

## 🌐 Usage

CheckDaWeb provides a user-friendly web interface where you can input a website URL and view the comprehensive analysis results.

You can also access a public instance of CheckDaWeb for immediate use:

  * **Public Instance (Development/Testing):** https://checkdaweb.shardq001.bedless.dev

**Important Note for Public Instances:**
When using the public instances, please be aware that your usage is subject to the **Terms of Service (TOS)** and **General Data Protection Regulation (GDPR) compliance**. We encourage you to review these documents for details on data handling and user responsibilities.

* **Terms of Service:** [/tos](https://checkdaweb.shardq001.bedless.dev/tos)
* **GDPR / Privacy Policy:** [/gdpr](https://checkdaweb.shardq001.bedless.dev/gdpr)

## 🤝 Contributing

We welcome contributions to CheckDaWeb\! If you have a feature you'd like to add, a bug fix, or any improvements, please follow these guidelines:

1.  **Fork the repository** and create your branch.
2.  **Make your changes.**
3.  **Create a Pull Request (PR)**:
      * Provide a clear and concise description of what your feature adds or what issue your fix resolves.
      * Ensure your code adheres to good quality standards.
      * Avoid introducing potential exploits or security vulnerabilities.
4.  **Review Process:** Your pull request will be reviewed by a trusted developer or maintainer for code quality and security.
5.  **Merge:** If everything meets the standards, your changes will be merged into the `main` branch and subsequently pushed to Docker Hub.

## 🤖 AI Guidelines

For full transparency regarding the use of AI in this project:

  * **README Generation:** This README file was generated with the assistance of an AI.
  * **Code Assistance:** [GitHub CoPilot](https://github.com/features/copilot/) may be used by developers to assist with coding tasks, such as looking up common errors or generating boilerplate code, rather than manual searches on platforms like Stack Overflow.

## 📄 License

This project is licensed under the [MIT License](https://www.google.com/search?q=LICENSE).
