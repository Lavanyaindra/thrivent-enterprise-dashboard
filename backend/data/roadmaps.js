const roadmaps = [];

for (let i = 1; i <= 40; i++) {
  roadmaps.push({
    id: `RDM-${i.toString().padStart(3, "0")}`,
    programId: `PRG-00${(i % 9) + 1}`,
    quarter: `Q${(i % 4) + 1} 2025`,
    milestone: `Milestone ${i}`,
    readiness: i % 4 === 0 ? "Approved" : i % 3 === 0 ? "In Review" : "Draft",
    owner: `Lead ${i}`
  });
}

module.exports = roadmaps;
