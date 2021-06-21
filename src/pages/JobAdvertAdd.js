import React,{useEffect, useState }from 'react'
import { Formik } from 'formik';
import JobAdvertService from '../services/JobAdvertService'
import JobTitleService from '../services/JobTitleService'
import WorkTimeService from '../services/WorkTimeService';
import CityService from '../services/CityService'
import WayWorkingService from '../services/WayWorkingService';
import { Select, Button } from 'evergreen-ui';
import * as Yup from 'yup';
import { Form, Message, Label, Container, TextArea, Grid, Segment,Image} from 'semantic-ui-react';
import swal from 'sweetalert';
import { } from 'formik-semantic-ui'





export default function JobAdvertAdd() {

    const validationSchema = Yup.object().shape({
        description: Yup.string().max(20,"Açıklama En fazla 20 karakter olabilir").required('Zorunlu Alan'),
        openPositions: Yup.number().min(1, 'En az 1 olabilir').max(10, 'En fazla 10 olabilir').required('Zorunlu Alan'),
        maxSalary: Yup.number().min(1, 'En az 1 olabilir').max(100000, 'En fazla 100000 olabilir'),
        minSalary: Yup.number().min(1, 'En az 1 olabilir').max(100000, 'En fazla 100000 olabilir'),
        employerId: Yup.number().required('Zorunlu Alan').nullable(),
        cityId: Yup.number().required("Zorunlu Alan").nullable(),
        endDate: Yup.date().max("2023-06-20","2023 Yılından Fazla Bitiş Tarihi Olamaz").required("Zorunlu Alan").nullable(),
        Id: Yup.string().required("Zorunlu Alan").nullable(),
        workTimeId: Yup.string().required("Zorunlu Alan").nullable(),
        wayOfWorkingId: Yup.string().required("Zorunlu Alan").nullable(),
    })
    

const [city, setCity] = useState([])
const [position, setPosition] = useState([])
const [wayofworking, setWayOfWorkings] = useState([])
const [worktimes, setWorkTimes] = useState([])





useEffect(() => {
    let cityService = new CityService();
    cityService.getcities().then(result => setCity(result.data.data))

    let jobPositionService = new JobTitleService();
    jobPositionService.getJobTitles().then(result => setPosition(result.data.data))

    let wayOfWorkingService = new WayWorkingService();
    wayOfWorkingService.getAllWorkings().then(result => setWayOfWorkings(result.data.data))

    let workTimeService=new WorkTimeService()
    workTimeService.getWorkTimes().then(result=>setWorkTimes(result.data.data))

  
}, [])
   return(
       <Container>
            <Formik
                initialValues={{
                    description: "",
                    openPositions: "",
                    maxSalary: "",
                    minSalary: "",
                    endDate: "",
                    cityId: "",
                    jobTitleId: "",
                    wayOfWorkingId: "",
                    workTimeId: "",
                    employerId: ""

                }}


                validationSchema={validationSchema}
                onSubmit={async (values, {resetForm }) => {
                    let jobAdvertisementService = new JobAdvertService();
                    jobAdvertisementService.addAdvertisement(values).then(response =>       swal(`${response.data.message}`, `${JSON.stringify(response.data)}`, "success"));
              
                   resetForm({})
                  





                }}
            >
                {({ handleSubmit, handleChange, values, errors, handleBlur }) => (
                    <Segment basic stle={{width:"200px"}}>
                    <Form style={{ background: "#f1f5f8", borderRadius: 30,position:"relative",align:"center",flexDirection:"column"}} onSubmit={handleSubmit}>
                        
                        <Image src='https://i.pinimg.com/564x/77/87/c7/7787c791932ac32b6125a7ca859ad503.jpg' size='large' />
                        
                        
                                    
                                        <Form.Field>
                                            <TextArea rows={2} type="text"
                                                name="description"
                                                onChange={handleChange}
                                                value={values.description || ''}
                                                 placeholder='İlan Açıklama' >

                                            </TextArea>
                                            {
                                                errors.description &&
                                                <Label basic color='red' pointing  >
                                                    {errors.description}
                                                </Label>
                                            }
                                        </Form.Field>
                                        <Form.Field>
                                            <input

                                                type="number"
                                                name="manyPeople"
                                                placeholder="Açık Pozisyon Adedi"
                                                onChange={handleChange}
                                                value={values.openPositions || ''}
                                            />
                                            {
                                                errors.openPositions &&
                                                <Label basic color='red' pointing  >
                                                    {errors.openPositions}
                                                </Label>
                                            }
                                        </Form.Field>
                                        <Form.Field>
                                            <input
                                                type="number"
                                                name="minSalary"
                                                min="0"
                                                placeholder="Minimum Maaş Miktarı"
                                                onChange={handleChange}
                                                value={values.minSalary || ''}
                                            />
                                            {
                                                errors.minSalary &&
                                                <Label basic color='red' pointing >
                                                    {errors.minSalary}
                                                </Label>
                                            }
                                        </Form.Field>

                                        <Form.Field>
                                            <input
                                                type="number"
                                                name="maxSalary"
                                                min="0"
                                                placeholder="Maximum Maaş Miktarı"
                                                onChange={handleChange}
                                                value={values.maxSalary || ''}


                                            />
                                            {
                                                errors.maxSalary &&
                                                <Label basic color='red' pointing >
                                                    {errors.maxSalary}
                                                </Label>
                                            }
                                        </Form.Field>
                                        <Form.Field>
                                            <input
                                                type="number"
                                                name="employerId"
                                                min="0"
                                                placeholder="İş Veren Id"
                                                onChange={handleChange}
                                                value={values.employerId || ''}


                                            />
                                            {
                                                errors.employerId &&
                                                <Label basic color='red' pointing >
                                                    {errors.employerId}
                                                </Label>
                                            }
                                        </Form.Field>
                                        <Form.Field>
                                            <input
                                                type="date" 
                                                name="endDate"
                                              
                                                placeholder="İlan Bitiş Tarihi"
                                                onChange={handleChange}
                                                value={values.endDate || ''}


                                            />
                                            {
                                                errors.endDate &&
                                                <Label basic color='red' pointing >
                                                    {errors.endDate}
                                                </Label>
                                            }
                                        </Form.Field>
                                    
                               
                                    
                                        <Form.Field>
                                            <Select
                                                name="cityId"
                                                onChange={handleChange}
                                                value={values.cityId || ''}
                                                onBlur={handleBlur}
                                                touched={values.cityId}

                                                style={{ display: 'block'}}
                                            >
                                                <option placeholder="Şehir Seçiniz"  defaultValue>Şehir Seçiniz</option>
                                                {

                                                    city.map(c => (
                                                        <option key={c.cityId} value={c.cityId}   >
                                                            {c.cityName}
                                                        </option>

                                                    ))
                                                }

                                            </Select>
                                            {
                                                errors.cityId &&
                                                <Label basic color='red' pointing >
                                                    {errors.cityId}
                                                </Label>
                                            }
                                        </Form.Field>
                                        <Form.Field>
                                            <Select
                                                name="jobTitleId"
                                                value={values.jobTitleId || ''}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                touched={values.titleId}
                                                style={{ display: 'block' }}
                                            >
                                                <option placeholder="Pozisyon Seçiniz" defaultValue    >Pozisyon Seçiniz</option>
                                                {

                                                    position.map(p => (
                                                        <option key={p.id} value={p.id}   >
                                                            {p.title}
                                                        </option>

                                                    ))
                                                }

                                            </Select>
                                            {
                                                errors.jobTitleId &&
                                                <Label basic color='red' pointing >
                                                    {errors.jobTitleId}
                                                </Label>
                                            }

                                        </Form.Field>
                                    
                               
                                        <Form.Field>
                                            <Select
                                                name="wayOfWorkingId"
                                                value={values.wayOfWorkingId}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                touched={values.wayOfWorkingId}
                                                style={{ display: 'block' }}
                                            >
                                                <option placeholder="Çalışma Türü Seçiniz" defaultValue    >Çalışma Türü Seçiniz</option>
                                                {

                                                    wayofworking.map(wow => (
                                                        <option key={wow.id} value={wow.id}   >
                                                            {wow.workingType}
                                                        </option>

                                                    ))
                                                }

                                            </Select>
                                            {
                                                errors.wayOfWorkingId &&
                                                <Label basic color='red' pointing >
                                                    {errors.wayOfWorkingId}
                                                </Label>
                                            }
                                        </Form.Field>
                                        <Form.Field>
                                            <Select
                                                name="workTimeId"
                                                value={values.workTimeId}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                touched={values.workTimeId}
                                                style={{ display: 'block' }}
                                            >
                                                <option placeholder="Çalışma Zamanı Seçiniz" defaultValue>Çalışma Zamanı Seçiniz</option>
                                                {

                                                    worktimes.map(wt => (
                                                        <option key={wt.id} value={wt.id}   >
                                                            {wt.name}
                                                        </option>

                                                    ))
                                                }

                                            </Select>
                                            {
                                                errors.workTimeId &&
                                                <Label basic color='red' pointing >
                                                    {errors.workTimeId}
                                                </Label>
                                            }
                                        </Form.Field>


                                        <Button   type="submit" color="blue">İlanı Kaydet</Button>
                              
                    </Form>
                 </Segment>
                )}
                
            </Formik>
        </Container>
   
       
    );
}
