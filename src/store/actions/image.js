export function addImg(img) {
  return {
    type: 'ADD_IMG',
    payload: img,
  };
}

export function deleteImg(id) {
  return {
    type: 'DELETE_IMG',
    payload: id,
  };
}
