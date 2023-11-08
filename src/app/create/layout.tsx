export default function Layout(props: any) {
  return (
    <form>
      <h2>Create 레이아웃</h2>
      {/* 해당 컴포넌트가 속해있는 page.tsx 페이지 */}
      {props.children}
    </form>
  );
}
