export function formatSpecificationName(specName: string): string {
  const joinedString = specName.split("_").join(" ");
  return (
    joinedString.charAt(0).toUpperCase() + joinedString.slice(1).toLowerCase()
  );
}

export function formatspecificationValue(value: string): string {
  return value.replaceAll("\\", "");
}
