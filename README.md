# 무신사 사전 과제

- [스토리북 배포 링크](https://62d3bf18b3caf1d7d164899c-yjcrdsjsrq.chromatic.com/)
- [무신사 과제 배포 링크](https://mina-gwak.github.io/musinsa/)
<br/>

### 실행 방법

1. 클론하기

```bash
git clone https://github.com/mina-gwak/musinsa.git
```

2. 디렉토리 이동

```bash
cd musinsa
```

3. 패키지 설치

```bash
npm install
```

4. `.env` 파일 생성

```jsx
REACT_APP_BASE_URL=http://localhost:3000
```

5. 실행

```bash
npm start
```
<br/>

### 개발 환경 & 라이브러리

- 리액트 (CRA)

  : 바닐라와 리액트를 모두 사용해보았지만 실무에서 리액트를 많이 사용하기도 하고 최근에 진행한 프로젝트도 전부 리액트여서 프로젝트를 진행하는 방식이나 어떤 생각과 고민을 하며 개발을 하는지 보여드리기에 리액트가 더 적합하다고 생각했습니다.

- 상태관리 라이브러리 - Recoil, React Query

  이제까지 사용했었던 상태 관리 방식을 정리해 비교해보고, 적합하거나 편리하다고 생각하는 라이브러리를 선택해서 개발했습니다. 상품 데이터와 같은 서버 상태를 관리할 때에는 React Query, 그 외의 클라이언트 상태 관리에는 Recoil을 사용했습니다.

  자세한 고민 과정은 [링크](https://www.notion.so/375743e0741e455fa25a8ff7c6987ff8)에서 확인하실 수 있습니다.

- 타입스크립트
- 스토리북
- 상태 관리 라이브러리
- Styled Component
- Axios
- ESLint
- Prettier
- MSW
  <br/>

### 과제 진행 방식

- [위키 - 요구사항 분석](https://github.com/mina-gwak/musinsa/wiki/%EC%9A%94%EA%B5%AC%EC%82%AC%ED%95%AD-%EB%B6%84%EC%84%9D)
- 주어진 요구사항과 디자인을 바탕으로 세부적인 구현 사항을 스토리로 정리하였습니다.
- 작성한 스토리를 바탕으로 이슈를 생성하고, `feature` 브랜치를 생성해 작업하여 `develop` 브랜치에 머지하는 방식을 사용했습니다.
- 이슈, PR을 작성할 때에는 `.github` 폴더에 템플릿을 정의하여 사용했습니다.
- 새롭게 알게된 것이나 고민되는 점, 발생했던 에러 등을 [노션](https://www.notion.so/4f4db1ae77ba4c198c5d657ec847bb1a)에 기록하며 과제를 진행했습니다.
