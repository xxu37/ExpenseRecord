using ExpenseRecord.Model;

namespace ExpenseRecord.Service
{
    public interface IExpenseService 
    {
        Task CreateRecord(ExpenseRecordDto newExpenseRecord);
        Task<List<ExpenseRecordDto>> GetRecord();
        Task<bool> RemoveRecord(string id);
    }
}
