# 🐳 Panduan Instalasi HRMS dengan Docker

## 📋 Prasyarat

Pastikan Docker sudah terinstall di komputer Anda:

### Windows:
- Download **Docker Desktop for Windows** dari: https://www.docker.com/products/docker-desktop
- Install dan restart komputer
- Jalankan Docker Desktop

### Mac:
- Download **Docker Desktop for Mac** dari: https://www.docker.com/products/docker-desktop
- Install dengan drag & drop ke Applications
- Jalankan Docker Desktop

### Linux:
```bash
# Ubuntu/Debian
sudo apt-get update
sudo apt-get install docker.io docker-compose

# CentOS/RHEL
sudo yum install docker docker-compose
sudo systemctl start docker
```

## 🚀 Cara Install (Super Mudah!)

### **Metode 1: Menggunakan Docker Compose (RECOMMENDED)**

1. **Extract file project**
```bash
tar -xzf hrms-nextjs-app.tar.gz
cd hrms-nextjs-app
```

2. **Jalankan dengan satu command!**
```bash
docker-compose up -d
```

3. **Buka browser**
```
http://localhost:3000
```

**Selesai!** 🎉 Aplikasi sudah running!

---

### **Metode 2: Menggunakan Docker Manual**

1. **Extract dan masuk ke folder**
```bash
tar -xzf hrms-nextjs-app.tar.gz
cd hrms-nextjs-app
```

2. **Build Docker image**
```bash
docker build -t hrms-app .
```

3. **Run container**
```bash
docker run -d -p 3000:3000 --name hrms-container hrms-app
```

4. **Buka browser**
```
http://localhost:3000
```

---

## 🎮 Command Berguna

### Cek status container
```bash
docker ps
```

### Lihat logs aplikasi
```bash
docker logs hrms-nextjs-app

# Atau follow logs real-time
docker logs -f hrms-nextjs-app
```

### Stop aplikasi
```bash
docker-compose down

# Atau manual
docker stop hrms-container
```

### Start aplikasi lagi
```bash
docker-compose up -d

# Atau manual
docker start hrms-container
```

### Restart aplikasi
```bash
docker-compose restart

# Atau manual
docker restart hrms-container
```

### Hapus container
```bash
docker-compose down --volumes

# Atau manual
docker rm -f hrms-container
```

### Rebuild image (jika ada perubahan code)
```bash
docker-compose up -d --build
```

---

## 🔧 Konfigurasi

### Mengganti Port

Edit file `docker-compose.yml`:
```yaml
ports:
  - "8080:3000"  # Akses via http://localhost:8080
```

### Environment Variables

Tambahkan di `docker-compose.yml`:
```yaml
environment:
  - NODE_ENV=production
  - NEXT_PUBLIC_API_URL=https://api.example.com
  - NEXT_PUBLIC_APP_NAME=My HRMS
```

---

## 📊 Monitoring & Health Check

### Cek health status
```bash
docker ps --format "table {{.Names}}\t{{.Status}}"
```

### Masuk ke dalam container (debugging)
```bash
docker exec -it hrms-nextjs-app sh
```

### Cek resource usage
```bash
docker stats hrms-nextjs-app
```

---

## 🐛 Troubleshooting

### Port 3000 sudah digunakan
```bash
# Cari process yang menggunakan port
# Windows
netstat -ano | findstr :3000

# Mac/Linux
lsof -i :3000

# Atau gunakan port lain di docker-compose.yml
ports:
  - "3001:3000"
```

### Container tidak start
```bash
# Lihat logs error
docker logs hrms-nextjs-app

# Rebuild from scratch
docker-compose down
docker-compose build --no-cache
docker-compose up -d
```

### Out of memory
```bash
# Tambahkan memory limit di docker-compose.yml
services:
  hrms-app:
    mem_limit: 512m
```

### Cleanup Docker (hapus semua unused resources)
```bash
docker system prune -a
```

---

## 🚀 Deploy ke Production

### 1. Build optimized image
```bash
docker build -t hrms-app:production .
```

### 2. Push ke Docker Hub (optional)
```bash
docker tag hrms-app:production yourusername/hrms-app:latest
docker push yourusername/hrms-app:latest
```

### 3. Deploy ke server
```bash
# Di server production
docker pull yourusername/hrms-app:latest
docker run -d -p 80:3000 --name hrms-prod --restart always yourusername/hrms-app:latest
```

---

## 🔒 Security Best Practices

1. **Jangan expose semua ports**
```yaml
ports:
  - "127.0.0.1:3000:3000"  # Hanya accessible dari localhost
```

2. **Gunakan environment variables untuk secrets**
```yaml
env_file:
  - .env.local
```

3. **Regular update base image**
```bash
docker pull node:18-alpine
docker-compose build --no-cache
```

---

## 📦 Multi-Container Setup (dengan Database)

Jika nanti mau tambah database, edit `docker-compose.yml`:

```yaml
version: '3.8'

services:
  hrms-app:
    build: .
    ports:
      - "3000:3000"
    depends_on:
      - postgres
    environment:
      - DATABASE_URL=postgresql://user:password@postgres:5432/hrmsdb

  postgres:
    image: postgres:15-alpine
    environment:
      - POSTGRES_USER=user
      - POSTGRES_PASSWORD=password
      - POSTGRES_DB=hrmsdb
    volumes:
      - postgres-data:/var/lib/postgresql/data

volumes:
  postgres-data:
```

---

## ✅ Verifikasi Instalasi Berhasil

Jika instalasi berhasil, Anda akan melihat:

```bash
$ docker-compose up -d
Creating network "hrms-nextjs-app_default" with the default driver
Creating hrms-nextjs-app ... done

$ docker ps
CONTAINER ID   IMAGE              STATUS         PORTS                    NAMES
abc123def456   hrms-app          Up 10 seconds  0.0.0.0:3000->3000/tcp  hrms-nextjs-app
```

Buka browser: **http://localhost:3000** ✨

---

## 💡 Tips & Tricks

1. **Gunakan Docker Compose** - Lebih mudah manage
2. **Set restart policy** - Auto restart jika crash
3. **Monitor logs regularly** - Deteksi masalah early
4. **Backup volumes** - Jika ada data persistent
5. **Update images** - Security patches

---

## 🎯 Quick Reference

```bash
# Start
docker-compose up -d

# Stop
docker-compose down

# Restart
docker-compose restart

# Logs
docker-compose logs -f

# Rebuild
docker-compose up -d --build

# Status
docker-compose ps
```

---

## 📧 Support

Jika ada masalah atau pertanyaan tentang Docker setup, silakan:
- Cek logs: `docker logs hrms-nextjs-app`
- Restart container: `docker-compose restart`
- Rebuild: `docker-compose up -d --build`

---

## 🎉 Keuntungan Menggunakan Docker

✅ **Konsisten** - Jalan sama di semua environment  
✅ **Cepat** - Setup dalam hitungan menit  
✅ **Isolasi** - Tidak ganggu aplikasi lain  
✅ **Scalable** - Mudah scale horizontal  
✅ **Portabel** - Bisa deploy kemana saja  
✅ **Reproducible** - Build sekali, jalan dimana saja  

---

**Happy Dockering! 🐳**
