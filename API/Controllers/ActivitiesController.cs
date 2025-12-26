using System;
using Application.Activities.Commands;
using Application.Activities.DTOs;
using Application.Activities.Queries;
using Domain;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{

    public class ActivitiesController : BaseApiController //PRIMARY CONSTRUCTOR INSTEAD DEPENDENCY INJECTION
    {
        [HttpGet]
        public async Task<ActionResult<List<Activity>>> GetActivities()
        {
            return await Mediator.Send(new GetActivityList.Query());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Activity>> GetActivityDetail(string id)
        {
            // THIS IS HOW IT WOULD LOOK (WITH LOGIC IN OUR CONTROLLERS) IF WE WERENT USING MEDIATR PATTERN AND CLEANR ARCHITECTURE
            // var activity =  await Mediator.Send(new GetActivityDetails.Query{Id = id});
            // if (activity == null) return NotFound();

            var result = await Mediator.Send(new GetActivityDetails.Query{Id = id});
            
            return HandleResult(result);
        }

        [HttpPost]
        public async Task<ActionResult<string>> CreateActivity(CreateActivityDto activityDTO)
        {
            var result = await Mediator.Send(new CreateActivity.Command{ActivityDTO = activityDTO});

            return HandleResult(result);
        }

        [HttpPut]
        public async Task<ActionResult> EditActivity(EditActivityDTO activityDTO)
        {
            var result = await Mediator.Send(new EditActivity.Command{ActivityDTO = activityDTO});
            
            return HandleResult(result);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteActivity(string id)
        {
            var result = await Mediator.Send(new DeleteActivity.Command{Id = id});

            return HandleResult(result);
        }
    }
}
