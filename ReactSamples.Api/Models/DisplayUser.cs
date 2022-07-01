using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactSamples.Api.Models
{
    public class DisplayUser
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string FullName => $"{FirstName} {LastName}";


        public string Username { get; set; }
        public string Email { get; set; }

        public string Role { get; set; }
        public string RegistrationDate { get; set; }
    }
}
