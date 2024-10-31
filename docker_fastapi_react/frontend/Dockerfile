# ステージ1: ビルド用のステージ
FROM node:22.5.1 as build

# 作業ディレクトリを設定
WORKDIR /app

# package.jsonとpackage-lock.jsonをコピー
COPY package*.json ./

# 依存関係をインストール
RUN npm install

# アプリのソースコードをコピー
COPY . .

# Reactアプリをビルド
RUN npm run build

# ステージ2: 配信用のステージ
FROM nginx:alpine

# ビルドされたファイルをNginxの配信ディレクトリにコピー
COPY --from=build /app/dist /usr/share/nginx/html

# Nginxのデフォルト設定を上書きしないようにする
EXPOSE 80

# Nginxを起動
CMD ["nginx", "-g", "daemon off;"]
