using ExpenseRecord.Model;
using ExpenseRecord.Service;
using Microsoft.AspNetCore.Mvc;

namespace ExpenseRecord.Controllers
{
    [Route("api/v1/[controller]")]
    [Produces("application/json")]
    [ApiController]
    public class ExpenseController :ControllerBase
    {
        private readonly IExpenseService _expenseService;

        public ExpenseController(IExpenseService expenseService)
        {
            _expenseService = expenseService;
        }

        [HttpGet]
        [ProducesResponseType((typeof(ExpenseRecordDto)), 200)]
        public async Task<ActionResult<List<ExpenseRecordDto>>> GetAsync()
        {
            var result = await _expenseService.GetRecord();
            return Ok(result);
        }

        [HttpPost]
        [ProducesResponseType((typeof(ExpenseRecordDto)), 201)]
        [ProducesResponseType(400)]
        public async Task<ActionResult<ExpenseRecordDto>> PostAsync([FromBody] ExpenseRecordCreateRequest expenseRecordCreateRequest)
        {
            var expenseRecordDto = new ExpenseRecordDto
            {
                Description = expenseRecordCreateRequest.Description,
                Type = expenseRecordCreateRequest.Type,
                Amount = expenseRecordCreateRequest.Amount,
                ExpenseDate = expenseRecordCreateRequest.ExpenseDate,
            };
            await _expenseService.CreateRecord(expenseRecordDto);
            return Created("", expenseRecordDto);// "": location header
        }

        [HttpDelete("{id}")]
        [ProducesResponseType(404)]
        [ProducesResponseType(204)]
        public async Task<ActionResult> DeleteAsync(string id)
        {
            var isSuccessful = await _expenseService.RemoveRecord(id);
            if (isSuccessful)
            {
                return NotFound($"The item with id {id} is not exist");
            }
            else
            {
                return NoContent();
            }

        }

    }
}
