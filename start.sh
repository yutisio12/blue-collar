#!/bin/bash
# Start HRMS Application dengan Docker

echo "🚀 Starting HRMS Application..."
echo ""

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    echo "❌ Docker tidak terinstall!"
    echo "   Silakan install Docker terlebih dahulu:"
    echo "   https://www.docker.com/products/docker-desktop"
    exit 1
fi

# Check if Docker is running
if ! docker info &> /dev/null; then
    echo "❌ Docker tidak berjalan!"
    echo "   Silakan jalankan Docker Desktop terlebih dahulu"
    exit 1
fi

echo "✅ Docker terdeteksi dan berjalan"
echo ""

# Check if docker-compose exists
if command -v docker-compose &> /dev/null; then
    echo "🐳 Menggunakan docker-compose..."
    docker-compose up -d
else
    echo "🐳 Menggunakan docker compose (V2)..."
    docker compose up -d
fi

echo ""
echo "⏳ Menunggu aplikasi siap..."
sleep 5

echo ""
echo "✨ HRMS Application sudah berjalan!"
echo ""
echo "📱 Akses aplikasi di:"
echo "   👉 http://localhost:3000"
echo ""
echo "🛠️  Command berguna:"
echo "   - Lihat logs: docker-compose logs -f"
echo "   - Stop app:   docker-compose down"
echo "   - Restart:    docker-compose restart"
echo ""
