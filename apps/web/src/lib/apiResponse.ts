export function success(data: unknown) {
 return Response.json({ success: true, data });
}

export function failure(message: string) {
 return Response.json({ success: false, message }, { status: 400 });
}