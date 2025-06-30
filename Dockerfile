# 使用官方 Node.js 基础镜像（包含 pnpm）
FROM node:20

# 安装 pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# 设置容器内的工作目录
WORKDIR /app

# 复制必要的文件以利用 Docker 缓存层
COPY package.json pnpm-lock.yaml ./

# 安装项目依赖
RUN pnpm install

# 复制所有项目文件到容器中
COPY . .

# 构建 VitePress 项目
RUN pnpm run docs:build

# 暴露 5173 端口 (VitePress 默认开发服务器端口)
EXPOSE 5173

# 运行 VitePress 开发服务器
CMD ["pnpm", "run", "docs:dev", "--", "--host", "0.0.0.0", "--port", "5173"]