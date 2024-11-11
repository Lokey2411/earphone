<?php

// @formatter:off
// phpcs:ignoreFile
/**
 * A helper file for your Eloquent Models
 * Copy the phpDocs from this file to the correct Model,
 * And remove them from this file, to prevent double declarations.
 *
 * @author Barry vd. Heuvel <barryvdh@gmail.com>
 */


namespace App\Models{
/**
 * 
 *
 * @property int $id
 * @property int $jobId
 * @property int $userId
 * @property string $applyDate
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\Job $job
 * @property-read \App\Models\User $user
 * @method static \Illuminate\Database\Eloquent\Builder|Apply newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Apply newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Apply query()
 * @method static \Illuminate\Database\Eloquent\Builder|Apply whereApplyDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Apply whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Apply whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Apply whereJobId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Apply whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Apply whereUserId($value)
 */
	class Apply extends \Eloquent {}
}

namespace App\Models{
/**
 * 
 *
 * @property int $id
 * @property int $employeeId
 * @property string $accountNumber
 * @property string $bankName
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\Employee $employee
 * @method static \Illuminate\Database\Eloquent\Builder|BankAccount newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|BankAccount newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|BankAccount query()
 * @method static \Illuminate\Database\Eloquent\Builder|BankAccount whereAccountNumber($value)
 * @method static \Illuminate\Database\Eloquent\Builder|BankAccount whereBankName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|BankAccount whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|BankAccount whereEmployeeId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|BankAccount whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|BankAccount whereUpdatedAt($value)
 */
	class BankAccount extends \Eloquent {}
}

namespace App\Models{
/**
 * 
 *
 * @property string $slogan
 * @property string $introduction
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|BasicInformation newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|BasicInformation newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|BasicInformation query()
 * @method static \Illuminate\Database\Eloquent\Builder|BasicInformation whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|BasicInformation whereIntroduction($value)
 * @method static \Illuminate\Database\Eloquent\Builder|BasicInformation whereSlogan($value)
 * @method static \Illuminate\Database\Eloquent\Builder|BasicInformation whereUpdatedAt($value)
 */
	class BasicInformation extends \Eloquent {}
}

namespace App\Models{
/**
 * 
 *
 * @property int $id
 * @property string $order_date
 * @property string|null $canceled_date
 * @property int $customerId
 * @property int $paymentId
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\User $customer
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Order> $orders
 * @property-read int|null $orders_count
 * @property-read \App\Models\Payment|null $payment
 * @property-read \App\Models\Shipment|null $shipment
 * @method static \Illuminate\Database\Eloquent\Builder|Cart newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Cart newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Cart query()
 * @method static \Illuminate\Database\Eloquent\Builder|Cart whereCanceledDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Cart whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Cart whereCustomerId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Cart whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Cart whereOrderDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Cart wherePaymentId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Cart whereUpdatedAt($value)
 */
	class Cart extends \Eloquent {}
}

namespace App\Models{
/**
 * 
 *
 * @property int $id
 * @property string $title
 * @property string $type
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\OrderCategory> $orders
 * @property-read int|null $orders_count
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\ProductCategory> $products
 * @property-read int|null $products_count
 * @method static \Illuminate\Database\Eloquent\Builder|Category newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Category newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Category query()
 * @method static \Illuminate\Database\Eloquent\Builder|Category whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Category whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Category whereTitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Category whereType($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Category whereUpdatedAt($value)
 */
	class Category extends \Eloquent {}
}

namespace App\Models{
/**
 * 
 *
 * @property int $id
 * @property int $departmentId
 * @property int $employeeId
 * @property string $checkInTime
 * @property string $checkOutTime
 * @property string $lat
 * @property string $lng
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\Department $department
 * @property-read \App\Models\Employee $employee
 * @method static \Illuminate\Database\Eloquent\Builder|CheckIn newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|CheckIn newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|CheckIn query()
 * @method static \Illuminate\Database\Eloquent\Builder|CheckIn whereCheckInTime($value)
 * @method static \Illuminate\Database\Eloquent\Builder|CheckIn whereCheckOutTime($value)
 * @method static \Illuminate\Database\Eloquent\Builder|CheckIn whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|CheckIn whereDepartmentId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|CheckIn whereEmployeeId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|CheckIn whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|CheckIn whereLat($value)
 * @method static \Illuminate\Database\Eloquent\Builder|CheckIn whereLng($value)
 * @method static \Illuminate\Database\Eloquent\Builder|CheckIn whereUpdatedAt($value)
 */
	class CheckIn extends \Eloquent {}
}

namespace App\Models{
/**
 * 
 *
 * @property int $id
 * @property int $departmentId
 * @property string $description
 * @property string $address
 * @property string $hotline
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\Department $department
 * @method static \Illuminate\Database\Eloquent\Builder|Contact newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Contact newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Contact query()
 * @method static \Illuminate\Database\Eloquent\Builder|Contact whereAddress($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Contact whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Contact whereDepartmentId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Contact whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Contact whereHotline($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Contact whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Contact whereUpdatedAt($value)
 */
	class Contact extends \Eloquent {}
}

namespace App\Models{
/**
 * 
 *
 * @property string $title
 * @property string $description
 * @property string $detailLink
 * @property string $detailFile
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|Copyright newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Copyright newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Copyright query()
 * @method static \Illuminate\Database\Eloquent\Builder|Copyright whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Copyright whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Copyright whereDetailFile($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Copyright whereDetailLink($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Copyright whereTitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Copyright whereUpdatedAt($value)
 */
	class Copyright extends \Eloquent {}
}

namespace App\Models{
/**
 * 
 *
 * @property int $id
 * @property int $ownerId
 * @property int $parentDepartmentId
 * @property string $name
 * @property string $address
 * @property string $openTime
 * @property string $closeTime
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection<int, Department> $childrenDepartments
 * @property-read int|null $children_departments_count
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Employee> $employees
 * @property-read int|null $employees_count
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Job> $jobs
 * @property-read int|null $jobs_count
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\LoginCode> $loginCode
 * @property-read int|null $login_code_count
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\News> $news
 * @property-read int|null $news_count
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\DepartmentNote> $notes
 * @property-read int|null $notes_count
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Notice> $notices
 * @property-read int|null $notices_count
 * @property-read \App\Models\User $owner
 * @property-read Department $parentDepartment
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\PaymentMethod> $paymentMethods
 * @property-read int|null $payment_methods_count
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Sale> $sales
 * @property-read int|null $sales_count
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Service> $services
 * @property-read int|null $services_count
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Social> $socials
 * @property-read int|null $socials_count
 * @method static \Illuminate\Database\Eloquent\Builder|Department newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Department newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Department query()
 * @method static \Illuminate\Database\Eloquent\Builder|Department whereAddress($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Department whereCloseTime($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Department whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Department whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Department whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Department whereOpenTime($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Department whereOwnerId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Department whereParentDepartmentId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Department whereUpdatedAt($value)
 */
	class Department extends \Eloquent {}
}

namespace App\Models{
/**
 * 
 *
 * @property int $id
 * @property int $departmentId
 * @property string $message
 * @property string|null $attachFile
 * @property string $schedule
 * @property string $contacts
 * @property string $map
 * @property string|null $otherMessage
 * @property string $jobs
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\Department $department
 * @method static \Illuminate\Database\Eloquent\Builder|DepartmentNote newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|DepartmentNote newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|DepartmentNote query()
 * @method static \Illuminate\Database\Eloquent\Builder|DepartmentNote whereAttachFile($value)
 * @method static \Illuminate\Database\Eloquent\Builder|DepartmentNote whereContacts($value)
 * @method static \Illuminate\Database\Eloquent\Builder|DepartmentNote whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|DepartmentNote whereDepartmentId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|DepartmentNote whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|DepartmentNote whereJobs($value)
 * @method static \Illuminate\Database\Eloquent\Builder|DepartmentNote whereMap($value)
 * @method static \Illuminate\Database\Eloquent\Builder|DepartmentNote whereMessage($value)
 * @method static \Illuminate\Database\Eloquent\Builder|DepartmentNote whereOtherMessage($value)
 * @method static \Illuminate\Database\Eloquent\Builder|DepartmentNote whereSchedule($value)
 * @method static \Illuminate\Database\Eloquent\Builder|DepartmentNote whereUpdatedAt($value)
 */
	class DepartmentNote extends \Eloquent {}
}

namespace App\Models{
/**
 * 
 *
 * @property int $id
 * @property int $productId
 * @property string $title
 * @property string $details
 * @property string|null $image
 * @property string|null $video
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\Product|null $product
 * @method static \Illuminate\Database\Eloquent\Builder|Description newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Description newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Description query()
 * @method static \Illuminate\Database\Eloquent\Builder|Description whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Description whereDetails($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Description whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Description whereImage($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Description whereProductId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Description whereTitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Description whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Description whereVideo($value)
 */
	class Description extends \Eloquent {}
}

namespace App\Models{
/**
 * 
 *
 * @property int $id
 * @property int $departmentId
 * @property \App\Models\Level $level
 * @property int $userId
 * @property string $name
 * @property string $email
 * @property string $phoneNumber
 * @property string $avatar
 * @property string $start_date
 * @property string $position
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\BankAccount> $bankAccounts
 * @property-read int|null $bank_accounts_count
 * @property-read \App\Models\Department $department
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\EmployeeNote> $notes
 * @property-read int|null $notes_count
 * @property-read \App\Models\User|null $user
 * @method static \Illuminate\Database\Eloquent\Builder|Employee newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Employee newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Employee query()
 * @method static \Illuminate\Database\Eloquent\Builder|Employee whereAvatar($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Employee whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Employee whereDepartmentId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Employee whereEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Employee whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Employee whereLevel($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Employee whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Employee wherePhoneNumber($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Employee wherePosition($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Employee whereStartDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Employee whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Employee whereUserId($value)
 */
	class Employee extends \Eloquent {}
}

namespace App\Models{
/**
 * 
 *
 * @property int $id
 * @property int $employeeId
 * @property string $note_date
 * @property string|null $attachment_file
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\Employee|null $owner
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\TodoItem> $todoItems
 * @property-read int|null $todo_items_count
 * @method static \Illuminate\Database\Eloquent\Builder|EmployeeNote newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|EmployeeNote newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|EmployeeNote query()
 * @method static \Illuminate\Database\Eloquent\Builder|EmployeeNote whereAttachmentFile($value)
 * @method static \Illuminate\Database\Eloquent\Builder|EmployeeNote whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|EmployeeNote whereEmployeeId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|EmployeeNote whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|EmployeeNote whereNoteDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|EmployeeNote whereUpdatedAt($value)
 */
	class EmployeeNote extends \Eloquent {}
}

namespace App\Models{
/**
 * 
 *
 * @property int $id
 * @property int $userId
 * @property int $productId
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\Product $product
 * @property-read \App\Models\User $user
 * @method static \Illuminate\Database\Eloquent\Builder|Favorite newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Favorite newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Favorite query()
 * @method static \Illuminate\Database\Eloquent\Builder|Favorite whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Favorite whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Favorite whereProductId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Favorite whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Favorite whereUserId($value)
 */
	class Favorite extends \Eloquent {}
}

namespace App\Models{
/**
 * 
 *
 * @property int $id
 * @property int $departmentId
 * @property string $type
 * @property string $description
 * @property float $salary
 * @property string $position
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Apply> $applies
 * @property-read int|null $applies_count
 * @property-read \App\Models\Department|null $department
 * @method static \Illuminate\Database\Eloquent\Builder|Job newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Job newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Job query()
 * @method static \Illuminate\Database\Eloquent\Builder|Job whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Job whereDepartmentId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Job whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Job whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Job wherePosition($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Job whereSalary($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Job whereType($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Job whereUpdatedAt($value)
 */
	class Job extends \Eloquent {}
}

namespace App\Models{
/**
 * 
 *
 * @property int $id
 * @property int $jobId
 * @property string $description
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\Job|null $job
 * @method static \Illuminate\Database\Eloquent\Builder|JobDescription newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|JobDescription newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|JobDescription query()
 * @method static \Illuminate\Database\Eloquent\Builder|JobDescription whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|JobDescription whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder|JobDescription whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|JobDescription whereJobId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|JobDescription whereUpdatedAt($value)
 */
	class JobDescription extends \Eloquent {}
}

namespace App\Models{
/**
 * 
 *
 * @property int $id
 * @property int $jobId
 * @property string $requirement
 * @property string $type
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\Job $job
 * @method static \Illuminate\Database\Eloquent\Builder|JobRequirement newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|JobRequirement newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|JobRequirement query()
 * @method static \Illuminate\Database\Eloquent\Builder|JobRequirement whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|JobRequirement whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|JobRequirement whereJobId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|JobRequirement whereRequirement($value)
 * @method static \Illuminate\Database\Eloquent\Builder|JobRequirement whereType($value)
 * @method static \Illuminate\Database\Eloquent\Builder|JobRequirement whereUpdatedAt($value)
 */
	class JobRequirement extends \Eloquent {}
}

namespace App\Models{
/**
 * 
 *
 * @property int $level
 * @property string $benefit
 * @property string $requirement
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Employee> $employees
 * @property-read int|null $employees_count
 * @method static \Illuminate\Database\Eloquent\Builder|Level newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Level newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Level query()
 * @method static \Illuminate\Database\Eloquent\Builder|Level whereBenefit($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Level whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Level whereLevel($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Level whereRequirement($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Level whereUpdatedAt($value)
 */
	class Level extends \Eloquent {}
}

namespace App\Models{
/**
 * 
 *
 * @property int $id
 * @property int $departmentId
 * @property int $userId
 * @property string $login_time
 * @property string $maintain_time
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\Department|null $department
 * @property-read \App\Models\User|null $user
 * @method static \Illuminate\Database\Eloquent\Builder|LoginCode newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|LoginCode newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|LoginCode query()
 * @method static \Illuminate\Database\Eloquent\Builder|LoginCode whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|LoginCode whereDepartmentId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|LoginCode whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|LoginCode whereLoginTime($value)
 * @method static \Illuminate\Database\Eloquent\Builder|LoginCode whereMaintainTime($value)
 * @method static \Illuminate\Database\Eloquent\Builder|LoginCode whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|LoginCode whereUserId($value)
 */
	class LoginCode extends \Eloquent {}
}

namespace App\Models{
/**
 * 
 *
 * @property int $id
 * @property int $departmentId
 * @property string $time
 * @property string $title
 * @property string $image
 * @property string $subtitle
 * @property string $description
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\Department $department
 * @method static \Illuminate\Database\Eloquent\Builder|News newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|News newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|News query()
 * @method static \Illuminate\Database\Eloquent\Builder|News whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|News whereDepartmentId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|News whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder|News whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|News whereImage($value)
 * @method static \Illuminate\Database\Eloquent\Builder|News whereSubtitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder|News whereTime($value)
 * @method static \Illuminate\Database\Eloquent\Builder|News whereTitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder|News whereUpdatedAt($value)
 */
	class News extends \Eloquent {}
}

namespace App\Models{
/**
 * 
 *
 * @property int $id
 * @property string $title
 * @property string $content
 * @property int $departmentId
 * @property string $schedule
 * @property string $expiredTime
 * @property \App\Models\NoticeTemplate $template
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\Department $department
 * @method static \Illuminate\Database\Eloquent\Builder|Notice newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Notice newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Notice query()
 * @method static \Illuminate\Database\Eloquent\Builder|Notice whereContent($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Notice whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Notice whereDepartmentId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Notice whereExpiredTime($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Notice whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Notice whereSchedule($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Notice whereTemplate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Notice whereTitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Notice whereUpdatedAt($value)
 */
	class Notice extends \Eloquent {}
}

namespace App\Models{
/**
 * 
 *
 * @property int $id
 * @property string $name
 * @property string $background
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|NoticeTemplate newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|NoticeTemplate newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|NoticeTemplate query()
 * @method static \Illuminate\Database\Eloquent\Builder|NoticeTemplate whereBackground($value)
 * @method static \Illuminate\Database\Eloquent\Builder|NoticeTemplate whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|NoticeTemplate whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|NoticeTemplate whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|NoticeTemplate whereUpdatedAt($value)
 */
	class NoticeTemplate extends \Eloquent {}
}

namespace App\Models{
/**
 * 
 *
 * @property int $id
 * @property int|null $productId
 * @property int $cartId
 * @property int $quantity
 * @property float $price
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\Cart $cart
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\OrderCategory> $categories
 * @property-read int|null $categories_count
 * @property-read \App\Models\Product|null $product
 * @method static \Illuminate\Database\Eloquent\Builder|Order newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Order newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Order query()
 * @method static \Illuminate\Database\Eloquent\Builder|Order whereCartId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Order whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Order whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Order wherePrice($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Order whereProductId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Order whereQuantity($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Order whereUpdatedAt($value)
 */
	class Order extends \Eloquent {}
}

namespace App\Models{
/**
 * 
 *
 * @property int $id
 * @property int $orderId
 * @property int $categoryId
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\Category $category
 * @property-read \App\Models\Order $order
 * @method static \Illuminate\Database\Eloquent\Builder|OrderCategory newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|OrderCategory newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|OrderCategory query()
 * @method static \Illuminate\Database\Eloquent\Builder|OrderCategory whereCategoryId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|OrderCategory whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|OrderCategory whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|OrderCategory whereOrderId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|OrderCategory whereUpdatedAt($value)
 */
	class OrderCategory extends \Eloquent {}
}

namespace App\Models{
/**
 * 
 *
 * @property int $id
 * @property int $productId
 * @property float $quantity
 * @property string $name
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\Product $product
 * @method static \Illuminate\Database\Eloquent\Builder|Part newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Part newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Part query()
 * @method static \Illuminate\Database\Eloquent\Builder|Part whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Part whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Part whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Part whereProductId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Part whereQuantity($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Part whereUpdatedAt($value)
 */
	class Part extends \Eloquent {}
}

namespace App\Models{
/**
 * 
 *
 * @property int $id
 * @property string $type
 * @property string $description
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|Partner newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Partner newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Partner query()
 * @method static \Illuminate\Database\Eloquent\Builder|Partner whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Partner whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Partner whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Partner whereType($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Partner whereUpdatedAt($value)
 */
	class Partner extends \Eloquent {}
}

namespace App\Models{
/**
 * 
 *
 * @property int $id
 * @property \App\Models\PaymentMethod|null $paymentMethod
 * @property float $price
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\Cart|null $cart
 * @method static \Illuminate\Database\Eloquent\Builder|Payment newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Payment newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Payment query()
 * @method static \Illuminate\Database\Eloquent\Builder|Payment whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Payment whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Payment wherePaymentMethod($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Payment wherePrice($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Payment whereUpdatedAt($value)
 */
	class Payment extends \Eloquent {}
}

namespace App\Models{
/**
 * 
 *
 * @property string $title
 * @property int $departmentId
 * @property string $introduction
 * @property string $detail
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\Department $department
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Payment> $payments
 * @property-read int|null $payments_count
 * @method static \Illuminate\Database\Eloquent\Builder|PaymentMethod newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|PaymentMethod newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|PaymentMethod query()
 * @method static \Illuminate\Database\Eloquent\Builder|PaymentMethod whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PaymentMethod whereDepartmentId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PaymentMethod whereDetail($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PaymentMethod whereIntroduction($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PaymentMethod whereTitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PaymentMethod whereUpdatedAt($value)
 */
	class PaymentMethod extends \Eloquent {}
}

namespace App\Models{
/**
 * 
 *
 * @property string $title
 * @property string $description
 * @property string $parentPrivacy
 * @property string $detailButtonText
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection<int, PrivacyPolicy> $childPolicy
 * @property-read int|null $child_policy_count
 * @property-read PrivacyPolicy $parentPolicy
 * @method static \Illuminate\Database\Eloquent\Builder|PrivacyPolicy newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|PrivacyPolicy newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|PrivacyPolicy query()
 * @method static \Illuminate\Database\Eloquent\Builder|PrivacyPolicy whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PrivacyPolicy whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PrivacyPolicy whereDetailButtonText($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PrivacyPolicy whereParentPrivacy($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PrivacyPolicy whereTitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PrivacyPolicy whereUpdatedAt($value)
 */
	class PrivacyPolicy extends \Eloquent {}
}

namespace App\Models{
/**
 * 
 *
 * @property int $id
 * @property int $departmentId
 * @property string $name
 * @property float $remain
 * @property string $shortDesc
 * @property float $price
 * @property string|null $image
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\ProductCategory> $categories
 * @property-read int|null $categories_count
 * @property-read \App\Models\Department $department
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Description> $descriptions
 * @property-read int|null $descriptions_count
 * @property-read \App\Models\Order|null $order
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Part> $parts
 * @property-read int|null $parts_count
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Sale> $sales
 * @property-read int|null $sales_count
 * @method static \Illuminate\Database\Eloquent\Builder|Product newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Product newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Product query()
 * @method static \Illuminate\Database\Eloquent\Builder|Product whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Product whereDepartmentId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Product whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Product whereImage($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Product whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Product wherePrice($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Product whereRemain($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Product whereShortDesc($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Product whereUpdatedAt($value)
 */
	class Product extends \Eloquent {}
}

namespace App\Models{
/**
 * 
 *
 * @property int $id
 * @property int $productId
 * @property int $cateId
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\Category $category
 * @property-read \App\Models\Product $product
 * @method static \Illuminate\Database\Eloquent\Builder|ProductCategory newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ProductCategory newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ProductCategory query()
 * @method static \Illuminate\Database\Eloquent\Builder|ProductCategory whereCateId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ProductCategory whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ProductCategory whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ProductCategory whereProductId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ProductCategory whereUpdatedAt($value)
 */
	class ProductCategory extends \Eloquent {}
}

namespace App\Models{
/**
 * 
 *
 * @property int $id
 * @property string $title
 * @property string $answer
 * @property string $type
 * @property int|null $parentQuestionId
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection<int, Question> $childrens
 * @property-read int|null $childrens_count
 * @property-read Question|null $parentQuestion
 * @method static \Illuminate\Database\Eloquent\Builder|Question newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Question newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Question query()
 * @method static \Illuminate\Database\Eloquent\Builder|Question whereAnswer($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Question whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Question whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Question whereParentQuestionId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Question whereTitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Question whereType($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Question whereUpdatedAt($value)
 */
	class Question extends \Eloquent {}
}

namespace App\Models{
/**
 * 
 *
 * @property int $id
 * @property string $role
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\UserRole> $users
 * @property-read int|null $users_count
 * @method static \Illuminate\Database\Eloquent\Builder|Role newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Role newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Role query()
 * @method static \Illuminate\Database\Eloquent\Builder|Role whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Role whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Role whereRole($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Role whereUpdatedAt($value)
 */
	class Role extends \Eloquent {}
}

namespace App\Models{
/**
 * 
 *
 * @property int $id
 * @property int $productId
 * @property int $departmentId
 * @property int $userId
 * @property int $discount
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\Department $department
 * @property-read \App\Models\Product $product
 * @property-read \App\Models\User $user
 * @method static \Illuminate\Database\Eloquent\Builder|Sale newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Sale newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Sale query()
 * @method static \Illuminate\Database\Eloquent\Builder|Sale whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Sale whereDepartmentId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Sale whereDiscount($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Sale whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Sale whereProductId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Sale whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Sale whereUserId($value)
 */
	class Sale extends \Eloquent {}
}

namespace App\Models{
/**
 * 
 *
 * @property int $id
 * @property int $departmentId
 * @property string $title
 * @property string $details
 * @property string $type
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\Department $department
 * @method static \Illuminate\Database\Eloquent\Builder|Service newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Service newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Service query()
 * @method static \Illuminate\Database\Eloquent\Builder|Service whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Service whereDepartmentId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Service whereDetails($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Service whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Service whereTitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Service whereType($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Service whereUpdatedAt($value)
 */
	class Service extends \Eloquent {}
}

namespace App\Models{
/**
 * 
 *
 * @property int $id
 * @property int $cartId
 * @property int $shipperId
 * @property string $shipDate
 * @property string $status
 * @property float $shipFee
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\Cart $cart
 * @property-read \App\Models\Employee $shipper
 * @method static \Illuminate\Database\Eloquent\Builder|Shipment newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Shipment newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Shipment query()
 * @method static \Illuminate\Database\Eloquent\Builder|Shipment whereCartId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Shipment whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Shipment whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Shipment whereShipDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Shipment whereShipFee($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Shipment whereShipperId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Shipment whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Shipment whereUpdatedAt($value)
 */
	class Shipment extends \Eloquent {}
}

namespace App\Models{
/**
 * 
 *
 * @property string $title
 * @property string $description
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|ShipmentMethod newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ShipmentMethod newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ShipmentMethod query()
 * @method static \Illuminate\Database\Eloquent\Builder|ShipmentMethod whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ShipmentMethod whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ShipmentMethod whereTitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ShipmentMethod whereUpdatedAt($value)
 */
	class ShipmentMethod extends \Eloquent {}
}

namespace App\Models{
/**
 * 
 *
 * @property int $id
 * @property int $departmentId
 * @property string $socialPage
 * @property string $socialLink
 * @property string $icon
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\Department $department
 * @method static \Illuminate\Database\Eloquent\Builder|Social newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Social newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Social query()
 * @method static \Illuminate\Database\Eloquent\Builder|Social whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Social whereDepartmentId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Social whereIcon($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Social whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Social whereSocialLink($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Social whereSocialPage($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Social whereUpdatedAt($value)
 */
	class Social extends \Eloquent {}
}

namespace App\Models{
/**
 * 
 *
 * @property int $id
 * @property int $departmentId
 * @property int $userId
 * @property string $title
 * @property string $description
 * @property string|null $attachment
 * @property string $type
 * @property string $phone_number
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\Department|null $department
 * @property-read \App\Models\User|null $user
 * @method static \Illuminate\Database\Eloquent\Builder|Support newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Support newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Support query()
 * @method static \Illuminate\Database\Eloquent\Builder|Support whereAttachment($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Support whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Support whereDepartmentId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Support whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Support whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Support wherePhoneNumber($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Support whereTitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Support whereType($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Support whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Support whereUserId($value)
 */
	class Support extends \Eloquent {}
}

namespace App\Models{
/**
 * 
 *
 * @property string $title
 * @property string $description
 * @property string $detail
 * @property string $detailLink
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|SupportedInformation newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|SupportedInformation newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|SupportedInformation query()
 * @method static \Illuminate\Database\Eloquent\Builder|SupportedInformation whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|SupportedInformation whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder|SupportedInformation whereDetail($value)
 * @method static \Illuminate\Database\Eloquent\Builder|SupportedInformation whereDetailLink($value)
 * @method static \Illuminate\Database\Eloquent\Builder|SupportedInformation whereTitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder|SupportedInformation whereUpdatedAt($value)
 */
	class SupportedInformation extends \Eloquent {}
}

namespace App\Models{
/**
 * 
 *
 * @property int $id
 * @property int $noteId
 * @property string $message
 * @property string $detail
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\EmployeeNote $note
 * @method static \Illuminate\Database\Eloquent\Builder|TodoItem newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|TodoItem newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|TodoItem query()
 * @method static \Illuminate\Database\Eloquent\Builder|TodoItem whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|TodoItem whereDetail($value)
 * @method static \Illuminate\Database\Eloquent\Builder|TodoItem whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|TodoItem whereMessage($value)
 * @method static \Illuminate\Database\Eloquent\Builder|TodoItem whereNoteId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|TodoItem whereUpdatedAt($value)
 */
	class TodoItem extends \Eloquent {}
}

namespace App\Models{
/**
 * 
 *
 * @property int $id
 * @property int $parentTopicId
 * @property string $title
 * @property string $link
 * @property string $type
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection<int, Topic> $childrens
 * @property-read int|null $childrens_count
 * @property-read Topic $parentTopic
 * @method static \Illuminate\Database\Eloquent\Builder|Topic newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Topic newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Topic query()
 * @method static \Illuminate\Database\Eloquent\Builder|Topic whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Topic whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Topic whereLink($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Topic whereParentTopicId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Topic whereTitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Topic whereType($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Topic whereUpdatedAt($value)
 */
	class Topic extends \Eloquent {}
}

namespace App\Models{
/**
 * 
 *
 * @property int $id
 * @property string $email
 * @property string $password
 * @property string $address
 * @property string $phone_number
 * @property string $username
 * @property string|null $avatar
 * @property string $remember_token
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Apply> $applies
 * @property-read int|null $applies_count
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Cart> $carts
 * @property-read int|null $carts_count
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Department> $department
 * @property-read int|null $department_count
 * @property-read \App\Models\Employee|null $employee
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Favorite> $favoriteProducts
 * @property-read int|null $favorite_products_count
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\LoginCode> $logIncodes
 * @property-read int|null $log_incodes_count
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\UserRole> $role
 * @property-read int|null $role_count
 * @method static \Database\Factories\UserFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder|User newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|User newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|User query()
 * @method static \Illuminate\Database\Eloquent\Builder|User whereAddress($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereAvatar($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User wherePassword($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User wherePhoneNumber($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereRememberToken($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereUsername($value)
 */
	class User extends \Eloquent {}
}

namespace App\Models{
/**
 * 
 *
 * @property int $id
 * @property int $userId
 * @property int $role
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\Role|null $roles
 * @property-read \App\Models\User $users
 * @method static \Illuminate\Database\Eloquent\Builder|UserRole newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|UserRole newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|UserRole query()
 * @method static \Illuminate\Database\Eloquent\Builder|UserRole whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|UserRole whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|UserRole whereRole($value)
 * @method static \Illuminate\Database\Eloquent\Builder|UserRole whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|UserRole whereUserId($value)
 */
	class UserRole extends \Eloquent {}
}

