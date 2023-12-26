Backend Setup
Buat folder:

bash
Copy code
mkdir backend
Masuk ke dalam folder backend:

bash
Copy code
cd backend
Inisialisasi proyek Node.js:

bash
Copy code
npm init -y
Instal dependensi Express, CORS, dan Dotenv:

bash
Copy code
npm i express cors dotenv
Instal Prisma sebagai dependensi pengembangan:

bash
Copy code
npm i -D prisma
Instal Prisma Client:

bash
Copy code
npm i @prisma/client
Inisialisasi Prisma:

bash
Copy code
npx prisma init
Setelah ini, Anda akan melihat file baru seperti .env dan schema.prisma yang dapat digunakan untuk konfigurasi dan membuat database.

Definisikan model schema untuk produk di dalam schema.prisma:

prisma
Copy code
model Product {
  id        Int      @id @default(autoincrement())
  name      String
  price     Float
  category  String
  createdAt DateTime @default(now())
}
Migrasi database dengan perintah:

bash
Copy code
npx prisma migrate dev
Ketika diminta, berikan nama migrate, misalnya "1" (nama dapat disesuaikan).

Tambahkan "type": "module" di dalam package.json untuk mendukung ES6.

Buat file index.js di dalam folder backend.

Frontend Setup
Untuk bagian frontend, aplikasi menggunakan React. Pastikan Anda telah menginstal Node.js dan npm sebelum melanjutkan. Setelah itu:

Buat proyek React:

bash
Copy code
npx create-react-app frontend
Masuk ke dalam folder frontend:

bash
Copy code
cd frontend
Instal React Router DOM, Axios, dan SWR:

bash
Copy code
npm install react-router-dom axios swr
