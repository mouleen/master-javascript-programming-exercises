function isOldEnoughToVote(age) {
  // your code here
  let limit=18;
  return (age >= limit)? true : false;
}
console.log(isOldEnoughToVote(22));
