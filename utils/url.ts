import { ALLOWED_SEARCH_PARAMS } from "@/constants";

export const updateSearchParams = (type: string, values: string | string[]) => {
  const searchParams = new URLSearchParams(window.location.search);

  searchParams.delete(type);

  if (Array.isArray(values)) {
    values.forEach((value) => {
      searchParams.append(type, value);
    });
  } else {
    searchParams.set(type, values);
  }

  const newPathName = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathName;
};
export const updateMultipleSearchParams = (paramsToUpdate: {
  [key: string]: string | string[] | number | number[];
}) => {
  const searchParams = new URLSearchParams(window.location.search);

  Object.keys(paramsToUpdate).forEach((type) => {
    searchParams.delete(type);
  });

  Object.entries(paramsToUpdate).forEach(([type, values]) => {
    if (Array.isArray(values)) {
      values.forEach((value) => {
        searchParams.append(type, `${value}`);
      });
    } else {
      searchParams.set(type, `${values}`);
    }
  });

  const newPathName = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathName;
};

export const removeSearchParams = (toRemove: string[]) => {
  const searchParams = new URLSearchParams(window.location.search);

  const keysToRemove = Array.from(searchParams.keys()).filter((key) =>
    toRemove.includes(key)
  );

  keysToRemove.forEach((key) => {
    searchParams.delete(key);
  });

  const newPathName = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathName;
};

export const addRemoveSearchParams = (
  type: string,
  values: string | string[],
  categoryFilters: string[],
  remove?: boolean
) => {
  const searchParams = new URLSearchParams(window.location.search);
  const newSearchParams: { key: string; values: string[] }[] = [];

  searchParams.forEach((value, key) => {
    addNewSearchParams(key, value);
  });

  if (Array.isArray(values)) {
    values.forEach((value) => {
      addNewSearchParams(type, value);
    });
  } else {
    addNewSearchParams(type, values);
  }

  if (remove) {
    newSearchParams.forEach((param) => {
      if (param.key === type) {
        param.values = param.values.filter((e) => e !== values);
      }
    });
  }

  const newPathName = `${window.location.pathname}?${newSearchParams
    .map((param) =>
      param.values.map((value) => `${param.key}=${value}`).join("&")
    )
    .join("&")}`;

  return newPathName;

  function addNewSearchParams(key: string, value: string) {
    const isValid =
      categoryFilters.includes(key) || ALLOWED_SEARCH_PARAMS.includes(key);
    const existsIndex = newSearchParams.findIndex((param) => param.key === key);

    if (!isValid) return;

    if (existsIndex !== -1) {
      const selected = newSearchParams[existsIndex];
      if (!selected.values.includes(value)) {
        selected.values.push(value);
      }
    } else {
      newSearchParams.push({
        key,
        values: [value],
      });
    }
  }
};
