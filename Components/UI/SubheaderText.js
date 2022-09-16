import SubHeading1 from './SubHeading1';
export default function BasicText(props) {
  let { device } = props;
  return (
    <>
      <SubHeading1 device={device}>{props.children}</SubHeading1>
      
    </>
  );
}
