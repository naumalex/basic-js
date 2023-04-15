function getDNSStats(domains) {
  const domainStats = {};
  for (let i = 0; i < domains.length; i++) {
    arr = domains[i].split('.').reverse();
    for (j = 0; j < arr.length; j++) {
      let domain = '.' + arr.slice(0, j + 1).join('.');
      if (!domainStats[domain]) {
        domainStats[domain] = 1;
      }
      else { 
        (domainStats[domain] += 1); 
      };
    }
  }
  return domainStats;
}

console.log(getDNSStats(['epam.com', 'info.epam.com']));