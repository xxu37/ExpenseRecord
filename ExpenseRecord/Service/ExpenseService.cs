using ExpenseRecord.Model;

namespace ExpenseRecord.Service
{
    public class ExpenseService : IExpenseService
    {
        private static readonly List<ExpenseRecordDto> _expenseRecords = new();
        public Task CreateRecord(ExpenseRecordDto newExpenseRecord)
        {
            _expenseRecords.Add(newExpenseRecord);
            return Task.CompletedTask;
        }

        public Task<List<ExpenseRecordDto>> GetRecord()
        {
            return Task.FromResult(_expenseRecords);
        }

        public Task<bool> RemoveRecord(string id)
        {
            var itemToBeRemoved = _expenseRecords.Find(x => x.Id == id);
            if (itemToBeRemoved is null)
            {
                return Task.FromResult(false);
            }
            _expenseRecords.Remove(itemToBeRemoved);
            return Task.FromResult(true);
        }
    }
}
