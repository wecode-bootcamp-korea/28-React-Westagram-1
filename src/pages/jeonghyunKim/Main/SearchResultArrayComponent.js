export default function SearchResultArrayComponent(props) {
  return (
    <>
      {props.searchResult.map(value => {
        return <span key={value.id}>{value.id}</span>;
      })}
    </>
  );
}
