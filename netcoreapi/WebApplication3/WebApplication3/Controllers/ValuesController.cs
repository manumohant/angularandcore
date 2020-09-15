using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WebApplication3.Controllers
{
    public class Student
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Age { get; set; }
        public string Country { get; set; }
    }
    [ApiController]
    [Route("api/[controller]")]
    public class ValuesController : ControllerBase
    {
        private Random rnd = new Random();
        private static List<Student> Students = new List<Student>() { new Student {Id=0, Name = "Raju", Age = 10, Country = "India" } };
        // GET: api/<controller>
        [HttpGet]
        public List<Student> Get()
        {
            return Students;
        }

        // GET api/<controller>/5
        [HttpGet("{id}")]
        public Student Get(int id)
        {
            return Students.FirstOrDefault(p => p.Id == id);
        }

        // POST api/<controller>
        [HttpPost]
        public Student Post(Student value)
        {
            value.Id = rnd.Next(2, 100);
            Students.Add(value);

            return value;
        }

        // PUT api/<controller>/5
        [HttpPut]
        public void Put([FromBody]Student value)
        {
            foreach(var st in Students)
            {
                if(st.Id == value.Id)
                {
                    st.Name = value.Name;
                    st.Age = value.Age;
                    st.Country = value.Country;
                }
            }
        }

        // DELETE api/<controller>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            Students.Remove(Students.FirstOrDefault(p=>p.Id==id));
        }
    }
}
