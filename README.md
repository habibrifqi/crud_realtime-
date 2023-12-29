# Panduan Penggunaan

## Backend Setup

1. Buat folder:
    ```
    mkdir backend
    ```

2. Masuk ke dalam folder backend:
    ```
    cd backend
    ```

3. Inisialisasi proyek Node.js:
    ```
    npm init -y
    ```

4. Instal dependensi Express, CORS, dan Dotenv:
    ```
    npm i express cors dotenv
    ```

5. Instal Prisma sebagai dependensi pengembangan:
    ```
    npm i -D prisma
    ```

6. Instal Prisma Client:
    ```
    npm i @prisma/client
    ```

7. Inisialisasi Prisma:
    ```
    npx prisma init
    ```

    Setelah ini, Anda akan melihat file baru seperti `.env` dan `schema.prisma` yang dapat digunakan untuk konfigurasi dan membuat database.

8. Definisikan model schema untuk produk di dalam `schema.prisma`:
    ```prisma
    model Product {
      id        Int      @id @default(autoincrement())
      name      String
      price     Float
      category  String
      createdAt DateTime @default(now())
    }
    ```

9. Migrasi database dengan perintah:
    ```
    npx prisma migrate dev
    ```

    Ketika diminta, berikan nama migrate, misalnya "1" (nama dapat disesuaikan).

10. Tambahkan `"type": "module"` di dalam `package.json` untuk mendukung ES6.

11. Buat file `index.js` di dalam folder `backend`.

## Frontend Setup

Untuk bagian frontend, aplikasi menggunakan React. Pastikan Anda telah menginstal Node.js dan npm sebelum melanjutkan. Setelah itu:

1. Buat proyek React:
    ```
    npx create-react-app frontend
    ```

2. Masuk ke dalam folder frontend:
    ```
    cd frontend
    ```

3. Instal React Router DOM, Axios, dan SWR:
    ```
    npm install react-router-dom axios swr
    ```

Gunakan panduan ini sebagai referensi saat melakukan setup proyek Anda. Pastikan untuk memeriksa dan menyesuaikan langkah-langkah sesuai kebutuhan proyek Anda. Semoga berhasil!
