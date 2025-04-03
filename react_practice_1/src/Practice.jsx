export const Practice = () => {
  const student = [];

  return (
    <>
      {/* <p>{student.length && "Student not found"}</p> */}
      {/* solution :- 1 */}
      {/* <p>{student.length === 0 && "Student not found"}</p> */}
      {/* solution :- 2 */}
      {/* <p>{!student.length && "Student not found"}</p> */}
      {/* solution :- 3 */}
      <p>{Boolean(!student.length) && "Student not found"}</p>
      <p>Number of students : {student.length}</p>
    </>
  );
};
//? React ma `false`, `null`, `undefined`, `NaN` a value kyare te rander kartu nathi.
// ? jyare Jsx ma koy expression mukvama aave chhe tyare logical operator ma `&&` operator ma jyare left side ni value true hase to j right side ni vlaue check karse nakar always left side vlaue return karse.
// ? jyare `&&` operator ma left side & right side ni vlaue true hase to output always right side ni vlaue aavse.
