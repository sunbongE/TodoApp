# setInterval사용시 주의 사항

# 수정 전

아래 코드에서 발생한 문제

- 처음은 값이 일정하게 증가하더니 갈수록 이상해짐, 어떤 숫자가 나와야할지 모르는것 처럼 마구잡이로 출력됨.

원인은 setInterval이 컴포넌트 안에 있는 경우,
렌더링 될때마다 새로운 setInterval이 추가로 등록되기 때문이다.
그 결과, interval이 중복으로 여러개 실행돼서 난리가 난것이다.

**이는 리액트의 특징인 컴포넌트가 리렌더링 될 때마다 함수 컴포넌트 전체가 다시 실행되는 특징때문이다.**

```js
import { createContext, useContext, useEffect, useState } from "react";
// create a Context
export const AuthContext = createContext();

// Share the created context with other components
export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({ children }) {
  const [number, setNumber] = useState(10);

  setInterval(() => {
    setNumber((number) => number + 1);
  }, 1000);

  return (
    <AuthContext.Provider value={{ number }}>{children}</AuthContext.Provider>
  );
}
```

# 수정 후

문제를 해결하기 위해서 `useEffect`를 사용하고, setInterval실행 후, **기존의 interval을 제거하는 방식**으로 해야한다. 이는 **clearInterval**을 통해 할 수 있다.

`useEffect`가 왜 안전하지?

- 렌더링이 끝난 뒤 실행된다.
  - 렌더링 도중 DOM접근이나 UI비일관성같은 문제가 줄어듬.
- `useEffect`안에 return cleanup을 넘기면, 리액트가 2가지 상황에서 알아서 호출해준다.
  - 컴포넌트가 언마운트될 때
  - effect가 재실행되기 직전

이래서 안전함.

```js
import { createContext, useContext, useEffect, useState } from "react";
// create a Context
export const AuthContext = createContext();

// Share the created context with other components
export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({ children }) {
  const [number, setNumber] = useState(10);

  useEffect(() => {
    const interval = setInterval(() => {
      setNumber((number) => number + 1);
    }, 1000);
    return () => clearInterval(interval); // cleanup 추가
  }, []);

  return (
    <AuthContext.Provider value={{ number }}>{children}</AuthContext.Provider>
  );
}
```
