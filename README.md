# Modern React Frontend Architecture

最新のモダンスタックを用いた、UI/UXデザインと堅牢なフロントエンド設計を両立するためのリファレンス・プロジェクトです。
単なるコンポーネント実装に留まらず、「アクセシビリティ」「心地よいインタラクション」「保守性の高いコンポーネント設計」の3点に注力して構築しています。

## 🎯 プロジェクトの目的
マイクロインタラクションとReact/Typescriptの勉強のためのプロジェクトです。
* **UI/UXの探究**: Framer Motionを用いた、ユーザー体験を向上させる滑らかなインタラクションの実装と検証。
* **モダン開発手法の習得**: TypeScriptによる厳密な型定義と、Vite/Storybookを組み合わせた高速なコンポーネント駆動開発（CDD）の実践。
* **設計の標準化**: Atomic Designをベースとした、再利用性と拡張性の高いディレクトリ構成の構築。

## 🛠 技術スタック

| カテゴリ | 採用技術 | 選定理由 |
| :--- | :--- | :--- |
| **Framework** | **React + TypeScript** | 柔軟なUI構築に加え、厳密な型定義によりランタイムエラーを未然に防ぐため。 |
| **Build Tool** | **Vite** | 開発時のHMR（Hot Module Replacement）が極めて速く、開発体験を損なわないため。 |
| **Styling** | **Tailwind CSS (v4)** | ユーティリティファーストなアプローチにより、CSSの肥大化を抑え、一貫性のあるデザインを高速に実装するため。 |
| **UI Library** | **shadcn/ui** | Radix UIベースの高度なアクセシビリティを確保しつつ、スタイルを完全にカスタマイズ可能な「Headless UI」の利点を享受するため。 |
| **Animation** | **Framer Motion** | 宣言的な記法で複雑なオーケストレーション（連続アニメーション）を簡潔に記述するため。 |
| **Catalog** | **Storybook** | コンポーネントの状態（Loading, Error, Active等）をUIカタログとして可視化し、独立した環境でテスト・開発するため。 |

## 🏗 設計のこだわり

### 1. Atomic Designをベースにしたコンポーネント設計
再利用性と役割の責務を明確にするため、以下のルールで構成しています。
* **Atoms**: ボタン、入力フォーム、アイコン等の最小単位。
* **Molecules**: 複数のAtomsを組み合わせた、特定の機能を持つ最小ユニット。
* **Organisms**: MoleculesやAtomsを組み合わせ、独立して機能するセクション（Header, CardList等）。

### 2. インタラクション・ファースト
ユーザーの操作に対するフィードバックを重視しています。
* すべての対話型コンポーネントに、適切なホバー、フォーカス、アクティブ状態のアニメーションを付与。
* Framer Motionを活用し、要素の登場・消失（Layout Animation）における視覚的な連続性を確保。

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
```

## ✉️ Contact
ご連絡やお問い合わせは、下記までお願いします！Gitに関するものはIssueに残していただいても大丈夫です。

https://adhesive-form-ca1.notion.site/134c792be686808c8bb0e4342fe0625d