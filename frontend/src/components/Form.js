import React from 'react';
import { useForm } from 'react-hook-form';
import List from './List.js';

export default function Form() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    if (!data) return;
    console.log(data); // You can replace this with the appropriate action
    reset({
      name: '',
      type: 'Investment', // Resetting to default value
      amount: ''
    });
  };

  return (
    <div className="form max-w-sm mx-auto w-96">
      <h1 className='font-bold pb-4 text-xl' style={{textAlign:'center'}}>Transaction</h1>

      <form id='form' onSubmit={handleSubmit(onSubmit)} style={{marginLeft:'50px'}}>
        <div className="grid gap-4">
          <div className="input-group">
           
            <input type="text" id="name" {...register('name')} placeholder='Salary, House Rent, SIP' className='form-input' />
          </div>
          <select id="type" className='form-input' {...register('type')} style={{width:'30%'}}>
            <option value="Investment">Investment</option>
            <option value="Expense">Expense</option>
            <option value="Savings">Savings</option>
          </select>
          <div className="input-group">
            <input type="text" id="amount" {...register('amount')} placeholder='Amount' className='form-input' />
          </div>
          <div className="submit-btn">
            <button type="submit" className='border py-2 text-white bg-indigo-500 w-full'>Make Transaction</button>
          </div>
        </div>
      </form>

      <List />
    </div>
  );
}
