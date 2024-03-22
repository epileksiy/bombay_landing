import logo from './images/BS_Primary_Signature_White_RGB.png'
import './App.css';



function App() {
  return (
    <div className="w-screen h-screen bg-cyan-400 text-center pt-3 flex flex-col items-center">
      <img src={logo} alt="" className='w-64'/>
      <div className="w-full flex justify-center">
        <p className='text-white text-sm p-2 w-3/4'>YOU MUST BE OF LEGAL AGE FOR PURCHASING AND CONSUMING ALCOHOL TO ENTER THIS SITE</p>
      </div>

      <div className="bg-white rounded-xl p-4 w-5/6 flex flex-col items-center">
        <p className='text-cyan-400 text-4xl'>PLEASE ENTER YOUR YEAR OF BIRTH</p>
        <input type='text' name='age' className='text-slate-500 text-2xl my-5 w-2/6 text-center' placeholder="YYYY" required/>
        <p className='text-cyan-400 text-sm mt-2 w-5/6'>WE USE TRACKING AND OTHER COOKIES</p>
        <p className='text-cyan-400 text-sm mt-2 w-5/6'>COOKIE POLICY & PRIVACY POLICY</p>
        <p className='text-cyan-400 text-sm mt-6 w-5/6'>MANAGE COOKIES / ACCEPT ALL COOKIES</p>
        <div className="w-full mt-12 flex justify-center">
        <button type="button" class="text-white bg-cyan-400 hover:bg-blue-800 h-4/6 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-lg py-2.5 text-center me-2 mb-2 px-10">AGREE</button>
          <button type="button" class="text-white bg-cyan-400 hover:bg-blue-800 h-4/6 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-lg py-2.5 text-center me-2 mb-2 px-10">AGREE</button>
        </div>
      </div>


      
    </div>
  );
}

export default App;
