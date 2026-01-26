# Modern React Frontend Architecture

このプロジェクトは、高い開発体験（DX）と表現力（UI/UX）を両立するために、最新のモダンスタックで構築されています。

## 🛠 技術スタック

| カテゴリ | 採用技術 | 選定理由 |
| :--- | :--- | :--- |
| **Framework** | React + TypeScript | 堅牢な型安全性とコンポーネント指向 |
| **Build Tool** | Vite | 爆速な開発サーバー起動（HMR） |
| **Styling** | Tailwind CSS (v4) | クラス名によるユーティリティファーストなスタイリング |
| **UI Component** | shadcn/ui | カスタマイズ性の高い、コピペベースのコンポーネント集 |
| **Animation** | Framer Motion | 宣言的で滑らかなアニメーション実装 |
| **Catalog** | Storybook | コンポーネントのカタログ化と独立した開発環境 |
| **Design Pattern** | Atomic Design | 再利用性と保守性を高めるディレクトリ構成 |

---

## 🚀 開発の始め方

### 必須要件
* **Node.js**: `.nvmrc` に記載のバージョン（v22.17.1 推奨）
* **nvm**: Nodeバージョン管理ツール

### セットアップ手順

```bash
# 1. Nodeのバージョンを合わせる
nvm use

# 2. 依存パッケージのインストール
npm install

# 3. 開発サーバーの起動 (localhost:5173)
npm run dev

# 4. Storybookの起動 (localhost:6006)
npm run storybook