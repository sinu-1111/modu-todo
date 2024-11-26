import { compile } from "path-to-regexp";

// 주어진 경로와 파라미터를 이용해 URL을 생성하는 함수
export function generateUrl(pathTemplate: string, params?: Record<string, string>): string {
  const compilePath = compile(pathTemplate);
  return compilePath(params);
}
