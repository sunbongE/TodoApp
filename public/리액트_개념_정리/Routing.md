# 라우팅

> 어떻게 메인페이지, 로그인페이지 등으로 사용자를 이동시킬까?

사용전 설치
`npm install react-router-dom`

package.json에 "react-router-dom": "^7.8.0" 추가됨.
의존성 추가 후에는 프로젝트 재시작해야함.

### 사용법

```js
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function TodoApp() {
  return (
    <div className="TodoApp">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginComponent />}></Route>
          <Route path="/welcome" element={<WelcomeComponent />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
```

---

## 🚦React Router란?

React는 기본적으로 **페이지 이동 기능이 없음.**
URL이 바뀌어도 새로고침 없이 다른 컴포넌트를 보여주고 싶을 때 사용하는 게 **React Router**야.

---

## 1️⃣ `BrowserRouter`

### ✅ 역할: **앱 전체에 라우팅 기능을 제공하는 컨테이너**

```jsx
<BrowserRouter>{/* 여기에 Routes, Link 등이 들어감 */}</BrowserRouter>
```

- 실제로는 브라우저의 주소창(URL)을 감지하고, 그에 맞는 화면(컴포넌트)을 보여주는 역할.
- 앱 최상단에 한 번만 써야 해 (보통 App.js 또는 index.js에서 사용).

📦 내부적으로는 `window.history` API를 사용해서 페이지 이동을 처리함.

---

## 2️⃣ `Routes`

### ✅ 역할: **여러 개의 Route를 묶는 컨테이너**

```jsx
<Routes>
  <Route path="/login" element={<LoginComponent />} />
  <Route path="/welcome" element={<WelcomeComponent />} />
</Routes>
```

- 여러 개의 경로 설정(`Route`)을 묶어서, 현재 URL에 맞는 컴포넌트만 렌더링해줘.
- **React Router v6부터 `Switch`가 `Routes`로 변경됨.**

🧠 즉, `Routes`는 경로 비교 후 조건에 맞는 Route 하나만 골라서 보여줌!

---

## 3️⃣ `Route`

### ✅ 역할: **URL 경로에 따라 어떤 컴포넌트를 보여줄지 결정**

```jsx
<Route path="/login" element={<LoginComponent />} />
```

- `path`: 사용자가 주소창에 입력할 URL 경로
- `element`: 그 경로일 때 보여줄 컴포넌트

🧠 예: 사용자가 `/login`으로 이동하면 `<LoginComponent />`를 보여줌.

📌 **필수**: `element`에는 컴포넌트 **태그(`<컴포넌트 />`)** 를 써야 함. JSX 문법이야!

---

## 4️⃣ `useNavigate`

### ✅ 역할: **버튼 클릭 등으로 JS 코드에서 페이지 이동시키는 훅(hook)**

```jsx
import { useNavigate } from "react-router-dom";

const navigate = useNavigate();

function handleLogin() {
  // 로그인 성공 시 /welcome 페이지로 이동
  navigate("/welcome");
}
```

- `<Link>`처럼 사용자가 직접 클릭하는 게 아니라,
- **자바스크립트 코드로 URL을 바꾸고 싶을 때** 사용함 (ex. 로그인, 로그아웃, 제출 등).

---

## 📌 전체 흐름 예시

```jsx
<BrowserRouter>
  <Routes>
    <Route path="/login" element={<LoginComponent />} />
    <Route path="/welcome" element={<WelcomeComponent />} />
  </Routes>
</BrowserRouter>
```

- 브라우저에서 주소창에 `/login` → `LoginComponent` 보여줌
- `/welcome` → `WelcomeComponent` 보여줌
- 로그인 버튼을 누르면 `useNavigate()`로 이동시킬 수 있음

---

## ✨ 보너스: 자주 같이 쓰는 컴포넌트들

| 컴포넌트 / 훅         | 설명                                          |
| --------------------- | --------------------------------------------- |
| `<Link to="/path" />` | a 태그처럼 사용하지만 새로고침 없이 이동 가능 |
| `useParams()`         | URL 파라미터(예: /user/\:id) 가져올 때        |
| `useLocation()`       | 현재 URL 정보(쿼리 등) 가져올 때              |
| `useNavigate()`       | JS 코드로 페이지 이동할 때                    |

---

## ✅ 요약

| 이름            | 설명                            | 위치                          |
| --------------- | ------------------------------- | ----------------------------- |
| `BrowserRouter` | 라우팅 기능을 앱 전체에 적용    | 최상위 컴포넌트               |
| `Routes`        | 여러 경로(Route)를 그룹화       | BrowserRouter 내부            |
| `Route`         | URL에 따라 보여줄 컴포넌트 지정 | Routes 내부                   |
| `useNavigate`   | 자바스크립트에서 페이지 이동    | 함수형 컴포넌트 내부에서 사용 |

---

# Link 와 a 태그

차이점

- `<a href="">` 를 사용해서 링크로 이동하는 경우 전체 페이지가 새로고침되며 네트워크를 탄다.
- `<Link to="">` 를 사용하면 변경이 필요한 컴포넌트만 변경되고, 네트워크를 타지않는다.
