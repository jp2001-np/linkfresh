# TDD
Technical breakdown...
# Technical Design: LinkFresh

## Stack
- Frontend: Next.js, Tailwind CSS
- Backend: Express.js, Node.js
- Database: MongoDB Atlas
- Job Scheduler: node-cron
- CI/CD: GitHub Actions + Terraform for AWS EC2

## Architecture
- REST API backend with `/scan`, `/auth`, `/results`
- Cron job for Pro users’ weekly scans
- MongoDB stores scan results and user sites
- Terraform deploys EC2 API server
- Frontend connects via REST to API

## Security
- HTTPS enforced
- JWT Auth
- Rate limiting
