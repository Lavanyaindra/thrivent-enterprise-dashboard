const members = [];

for (let i = 1; i <= 40; i++) {
  members.push({
    id: `MEM-${i.toString().padStart(3, "0")}`,
    fullName: `Employee ${i}`,
    email: `employee${i}@thrivent.com`,
    role: i % 5 === 0 ? "Admin" : i % 3 === 0 ? "Manager" : "Contributor",
    workspaceId: `WKS-00${(i % 5) + 1}`,
    status: i % 7 === 0 ? "Invited" : "Active"
  });
}

module.exports = members;
