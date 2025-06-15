# Next.js with Supabase Project

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) and integrated with [Supabase](https://supabase.com/).

## Getting Started

First, install the dependencies:

```bash
npm install
```

### Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

You can get these values from your Supabase project settings.

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

This project is configured for deployment on Vercel. The environment variables will be automatically pulled from your Vercel project settings.

1. Push your code to a Git repository
2. Import the project in Vercel
3. Add the environment variables in your Vercel project settings
4. Deploy!

## Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Vercel Deployment](https://vercel.com/docs)
