# Server side rendering sample project

## Description

Next.js에서 SSR과 SSG를 사용하기 위한 스터디를 위해 샘플 프로젝트를 진행합니다.

이 프로젝트는 크게 2가지 페이지를 가지고 있고, 각 페이지는 다른 랜더링 방식으로 구현합니다.

1. users

- users 페이지는 SSR 방식으로 구현 진행합니다.
- ServerSideProps를 사용하여 컴퍼넌트에 표시되는 데이터를 가져와 전달합니다.
- users의 root depth는 list가 표시되고, user 선택 시 dynamic path로 사용자 페이지가 생성됩니다.

2. posts

- posts 페이지는 SSG 방식으로 구현 진행합니다.
- StaticProps를 사용하여 컴퍼넌트에 표시되는 데이터를 가져와 전달합니다.
- posts에서도 root depth는 list가 표시되고, post 선택 시 선택된 post의 동적 페이지가 생성됩니다.

## Getting Started

Run the development server:

```
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deploy on Vercel

이 프로젝트는 Vercel을 사용하여 배포하고 있고 아래 URL을 통해 배포된 페이지를 확인할 수 있습니다.

nextjs-ssr-test-eight.vercel.app
