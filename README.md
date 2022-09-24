# Headless Travel
Nuxt.js + Express.js + microCMS + Netlify + AWSで開発したメディアサイトです。

■URL  
[https://headless-travel.site/](https://headless-travel.site/)

■API用バックエンド管理システム  
[https://github.com/Nikeda-cafe/api-headless-travel](https://github.com/Nikeda-cafe/api-headless-travel)


## 作成の目的
* API連携を前提としたフロントエンド環境での開発技術の向上
* WordpressやPHPフレームワークに頼らないシステム開発の知見向上のため（javascriptのみで開発）
* フロントエンドとバックエンドの領域の分離した開発への適用のため
* サイトスピードを主としたUXパフォーマンスの高いWebサイトの実現のため

## 使用技術一覧
* フロントエンド
    - Nuxt.js（SPA）
    - Tailwind.css
* バッグエンド
    - microCMS
    - Express.js
    - MariaDB
    - Nginx
* クラウド環境
    - Netlify
    - AWS Lightsail
    - AWS cloudfront
* その他
    - GitHub（バージョン管理、デプロイ）
    - drawio（ドキュメント作成）
    - WSL2 (開発環境作成)
## 基盤構成ドキュメント
![](./drawio.svg)
