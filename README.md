# Narender Nain - Personal Website

This is the source code for my personal website and blog, built with Next.js, TypeScript, and Tailwind CSS.

## Features

- Responsive design that works on all devices
- Dark mode support
- Blog with MDX support
- Contact form
- Project showcase
- SEO optimized

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Content**: [MDX](https://mdxjs.com/) for blog posts
- **Deployment**: [AWS](https://aws.amazon.com/)

## Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/narendernain.in.git
cd narendernain.in
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

- `src/app/`: Contains the main pages of the website using Next.js App Router
- `src/components/`: Reusable UI components
- `src/content/blog/`: Blog posts written in MDX
- `src/utils/`: Utility functions
- `public/`: Static assets like images and fonts

## Deployment

The website is deployed on AWS using the following services:

1. **AWS S3**: For static file hosting
2. **AWS CloudFront**: For content delivery and HTTPS
3. **AWS Route 53**: For domain management

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

If you have any questions or suggestions, feel free to reach out to me at contact@narendernain.in.
