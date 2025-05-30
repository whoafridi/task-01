export const isOverdue = (dueDate, status) => {
  return status === "Ongoing" && new Date(dueDate) < new Date();
};
