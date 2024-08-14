const API_URL = "https://665f0fcd1e9017dc16f2a71a.mockapi.io/api";

export async function getMenList() {
  const res = await fetch(`${API_URL}/bitis/1`);

  if (!res.ok) throw Error("Failing to get men products");
  const data = await res.json();
  return data;
}

export async function getWomenList() {
  const res = await fetch(`${API_URL}/bitis/2`);

  if (!res.ok) throw Error("Failing to get women products");

  const data = await res.json();
  return data;
}

export async function getGirlList() {
  const res = await fetch(`${API_URL}/bitis/3`);

  if (!res.ok) throw Error("Failing to get women products");

  const data = await res.json();
  return data;
}
