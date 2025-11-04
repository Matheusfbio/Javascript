const {studentInfo} = require('./functionWithThis');
describe("Desafio sobre o uso de 'this' em funções", () => {

    it("Deve criar um objeto studentInfo corretamente", () => {
      const student = new studentInfo("Bruno", 40, "E");

    expect(student.name).toBe("Bruno");
    expect(student.age).toBe(40);
    expect(student.grade).toBe("E");
  });

  it("Deve exibir os dados corretos usando função arrow", (done) => {
    const student = new studentInfo("Alice", 20, "A");

    // Mock console.log to capture the output
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

    student.data_anonymous();
    
    setTimeout(() => {
      expect(consoleSpy).toHaveBeenCalledWith("Alice", 20, "A");
      consoleSpy.mockRestore();
      done();
    }, 2500);
  });
});