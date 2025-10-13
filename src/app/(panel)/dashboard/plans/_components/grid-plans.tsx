import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from '@/components/ui/card'
import { subscriptionPlans } from '@/utils/plans/index'


export function GridPlans() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-5">
      {subscriptionPlans.map((plan, index) => (
        <Card
          key={plan.id}
          className={`relative flex flex-col w-full mx-auto rounded-xl overflow-hidden ${index === 1 ? "border-emerald-500" : ""}`}
        >
          {index === 1 && (
            <div className='absolute top-0 left-0 w-full bg-emerald-500 py-3 text-center rounded-t-xl'>
              <p className='font-semibold text-white'>PROMOÇÃO EXCLUSIVA</p>
            </div>
          )}

          <CardHeader className="pt-7">
            <CardTitle className='text-xl md:text-2xl'>
              {plan.name}
            </CardTitle>
            <CardDescription>
              {plan.description}
            </CardDescription>
          </CardHeader>

          <CardContent>
            <ul>
              {plan.features.map((feature, index) => (
                <li key={index} className='text-sm md:text-base'>
                  {feature}
                </li>
              ))}
            </ul>

            <div className='mt-4'>
              <p className='text-gray-600 line-through'>{plan.oldPrice}</p>
              <p className='text-black text-2xl font-bold'>{plan.price}</p>
            </div>

          </CardContent>
          <CardFooter>
              <Button className='w-full bg-black'>
                Ativar Assinatura
              </Button>
          </CardFooter>
        </Card>
      ))}
    </section>
  )
}