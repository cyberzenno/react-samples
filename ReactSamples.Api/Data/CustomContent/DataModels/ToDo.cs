using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactSamples.Api.Data.DataModels.CustomContent
{
    public class ToDo
    {
        public enum TaskStatus
        {
            Pending,
            Done
        }

        public int Id { get; set; }
        public string Title { get; set; }
        public TaskStatus Status { get; set; }
        public string StatusAsString => Status.ToString();
        public DateTime? CreatedDate { get; set; }

        public string UserId { get; set; }
        public string Username { get; set; }
    }
}
