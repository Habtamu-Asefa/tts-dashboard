import { API_URL } from "./url";

const getTutors = async (token) => {
  const response = await fetch(`${API_URL}api/v1/tutor`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
  return response;
};

const getATutor = async (token, id) => {
  const response = await fetch(`${API_URL}api/v1/tutor/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
  return response;
};

const updateTutor = async (token, id, jobId, status) => {
  const response = await fetch(`${API_URL}api/v1/tutor/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      hiredJobId: jobId,
      status,
    }),
  });
  return response;
};

const deleteTutor = async (token, id) => {
  const response = await fetch(`${API_URL}api/v1/tutor/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
  return response;
};

export { getTutors, updateTutor, deleteTutor, getATutor };
