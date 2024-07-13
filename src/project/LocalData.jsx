const todoKey="todoData"
export const GetLocalData = () => {
   
     const saved = localStorage.getItem(todoKey);
   if(!saved) return [];
   return JSON.parse(saved)
}

export const SetLocalData =(tasks) => {
   return localStorage.setItem(todoKey, JSON.stringify(tasks));
}