import API_URL from "./url";

const getStudents = async (token) => {
  const response = await fetch(`${API_URL}api/v1/student`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
  return response;
};

const getAStudent = async (token, id) => {
  const response = await fetch(`${API_URL}api/v1/student/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
  return response;
};

const updateStudent = async (token, id, tutorId, status) => {
  const response = await fetch(`${API_URL}api/v1/student/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      tutorId,
      status,
    }),
  });
  return response;
};

const createStudent = async (token, studentBody) => {
  const response = await fetch(`${API_URL}api/v1/student`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      ...studentBody,
    }),
  });
  return response;
};

const deleteStudent = async (token, id) => {
  const response = await fetch(`${API_URL}api/v1/student/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
  return response;
};

export { getStudents, createStudent, getAStudent, deleteStudent, updateStudent };
