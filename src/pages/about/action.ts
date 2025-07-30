

export async function action({ request }: any) {
  // const data = await request.formData();
  // const todo = await fakeDb.addItem({
  //   title: data.get("title"),
  // });

  console.log('request', request)
  return { ok: true };
}