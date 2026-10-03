# Deployment Guide
1. Copy backend/.env.example to backend/.env.
2. Start PostgreSQL and apply database/schema.sql.
3. Install dependencies in frontend and backend.
4. `npm run build` in frontend.
5. Deploy frontend to Vercel.
6. Deploy backend + PostgreSQL to Render or Docker.
7. Configure HTTPS, CORS, environment secrets, backups and monitoring.
