<?php

namespace Models\Location;

use Illuminate\Database\Eloquent\Model;
use Models\Traits\Base;

class Province extends Model
{
    use Base;
    
    protected $table = 'location_province';
    protected $fillable = ['name', 'amar_code'];

    public function shahrestans()
    {
        return $this->hasMany(Shahrestan::class, 'province_id', 'id');
    }

    public function cities()
    {
        return $this->hasMany(Shahr::class, 'province_id', 'id');
    }
    
    // استان → شهرستان:
    // ostan hasMany shahrestan
    // شهرستان → بخش:
    // shahrestan hasMany bakhsh
    // شهرستان → دهستان:
    // shahrestan hasMany dehestan
    // بخش → دهستان:
    // bakhsh hasMany dehestan
    // بخش → شهر:
    // bakhsh hasMany shahr
    // دهستان → آبادی:
    // dehestan hasMany abadi
}
