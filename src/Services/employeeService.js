const KEYS = {
  employees: 'employees',
  employeeId: 'employeeId',
};
export const getDepartmentCollection = () => [
  { id: '1', title: 'Accounting' },
  { id: '2', title: 'HR' },
  { id: '3', title: 'Marketing' },
  { id: '4', title: 'Development' },
];

export function insertEmployee(data) {
  let employees = getAllemployees();
  data['id'] = generateEmployeeId();
  employees.push(data);
  localStorage.setItem(KEYS.employees, JSON.stringify(employees));
}

export function generateEmployeeId() {
  if (localStorage.getItem(KEYS.employeeId) == null)
    localStorage.setItem(KEYS.employeeId, '0');
  var id = parseInt(localStorage.getItem(KEYS.employeeId));
  localStorage.setItem(KEYS.employeeId, (++id).toString());
  return id;
}

export function getAllemployees() {
  if (localStorage.getItem(KEYS.employees) === null)
    localStorage.setItem(KEYS.employees, JSON.stringify([]));
  let employees = JSON.parse(localStorage.getItem(KEYS.employees));
  let departments = getDepartmentCollection();
  return employees.map((x) => ({
    ...x,
    department: departments[x.departmentId - 1].title,
  }));
}
