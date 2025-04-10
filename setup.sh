#!/bin/bash

echo "🔄 Copying environment variables..."
cp .env.example .env

echo "📦 Installing dependencies..."
npm install

echo "✅ Setup complete. Now you can run:"
echo ""
echo "    npm run dev"
